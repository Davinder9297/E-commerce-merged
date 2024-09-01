import passport from 'passport'
import jwt from 'jsonwebtoken'
import UserModel from '../model/User.model.js'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import ENV from '../config.js'

function generateToken(user) {
	return jwt.sign(
		{
			userID: user._id,
			email: user.email,
			mobile: user.mobile
		},
		ENV.JWT_SECRET,
		{ expiresIn: '24h' }
	);
}

passport.use(
	new GoogleStrategy(
		{
			clientID: ENV.GOOGLE_CLIENT_ID,
			clientSecret: ENV.GOOGLE_CLIENT_SECRET,
			callbackURL: `${ENV.SERVER_BASE_URL}/auth/google/callback`,
			scope: ['profile', 'email']
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				console.log(profile);
				let user = await UserModel.findOne({ email: profile.emails[0].value });

				if (user) {
					const token = generateToken(user);
					await UserModel.updateOne({ email: user.email }, { token });
					return done(null, { token, userID: user._id });
				} else {
					user = new UserModel({
						password: 'itsNotAPassword!',
						email: profile.emails[0].value,
						firstName: profile.name.givenName,
						lastName: profile.name.familyName
					});
					await user.save();
					const token = generateToken(user);
					await UserModel.updateOne({ email: user.email }, { token });
					return done(null, { token, userID: user._id });
				}
			} catch (error) {
				return done(null, false, { message: 'Internal Server Error - Error Saving Token' });
			}
		}
	)
);


// Serialize user
passport.serializeUser((user, done) => {
	done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
	done(null, user);
});
