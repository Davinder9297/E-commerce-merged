import passport from 'passport'
import {Router} from 'express'
import ENV from '../config.js'
const router = Router()


router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", {scope:["profile","email"]}));

router.get(
    "/google/callback",
	passport.authenticate("google", {
        successRedirect: ENV.CLIENT_BASE_URL,
		failureRedirect: "/auth/login/failed",
	})
);


router.get("/logout", (req, res) => {
	req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect(ENV.CLIENT_BASE_URL);
    });
});

export default router