// import React, { useState } from "react";
import "./Merchants.css";
import exportImg from "../assets/export.png";
import pencilIcon from "../assets/pencil.png";
import checkIcon from "../assets/check.png";
import { Link } from "react-router-dom";

function Merchants() {
  return (
    <div className="merchant">
      {/* Inputs Field */}
      <div className="inputs">
        {/* Inputs on left side */}
        <div className="inputs-left">
          <select name="table-view" id="table-view">
            <option>Page 1</option>
            <option>Page 2</option>
            <option>Page 3</option>
          </select>
          <div className="export-icon">
            <img src={exportImg} alt="export icon"/>
          </div>
          <div className="export-data">
            <p>Export data</p>
          </div>
        </div>

        {/* Inputs on right side */}
        <div className="inputs-right">
          <select name="select-zone" id="select-zone">
            <option>--select zone--</option>
            <option>Phase-2</option>
            <option>Phase-3</option>
          </select>
          <input
            type="text"
            name="personal-info"
            placeholder="Name or Email or Number"
            className="search-box"
          />
          <button className="go-btn">Go</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>

      <div className="merchants-data-table">
        <table>
          <tr>
            <th>
              <span>STORE</span>
            </th>
            <th>OPERATING ZONE</th>
            <th>
              <span>EMAIL</span>
            </th>
            <th>
              <span>CONTACT NUMBER</span>
            </th>
            <th>
              <span>LOCATION</span>
            </th>
            <th>
              <span>CREATED AT</span>
            </th>
            <th>
              <span>STATUS</span>
            </th>
            <th>ACTION</th>
          </tr>
          <tbody>
            <tr>
              <td>Store123a</td>
              <td>Chandigarh</td>
              <td>johndoe123@gmail.com</td>
              <td>XXXXXXXXX</td>
              <td>#715, b-20, Chandigarh</td>
              <td>22 February 2024</td>
              <td>Inactive</td>
              <td>
                <div className="action-icons">
                  <div className="pencil-icon">
                    <Link to="/EditMerchants">
                      <img src={pencilIcon} alt="pencil icon" />
                    </Link>
                  </div>
                  <div className="check-icon">
                    <img src={checkIcon} alt="check-icon" />
                  </div>
                </div>
              </td>
            </tr>
            {/* Content - 2 */}
            <tr>
              <td>Store123b</td>
              <td>Chandigarh</td>
              <td>johndoe123@gmail.com</td>
              <td>XXXXXXXXX</td>
              <td>#715, b-20, Chandigarh</td>
              <td>22 February 2024</td>
              <td>Inactive</td>
              <td>
              <div className="action-icons">
                  <div className="pencil-icon">
                    <Link to="/EditMerchants">
                      <img src={pencilIcon} alt="pencil icon" />
                    </Link>
                  </div>
                  <div className="check-icon">
                    <img src={checkIcon} alt="check-icon" />
                  </div>
                </div>
              </td>
            </tr>

            {/* Content - 3 */}
            <tr>
              <td>Store123c</td>
              <td>Chandigarh</td>
              <td>johndoe123@gmail.com</td>
              <td>XXXXXXXXX</td>
              <td>#715, b-20, Chandigarh</td>
              <td>22 February 2024</td>
              <td>Inactive</td>
              <td>
              <div className="action-icons">
                  <div className="pencil-icon">
                    <Link to="/EditMerchants">
                      <img src={pencilIcon} alt="pencil icon" />
                    </Link>
                  </div>
                  <div className="check-icon">
                    <img src={checkIcon} alt="check-icon" />
                  </div>
                </div>
              </td>
            </tr>

            {/* Content - 4 */}
            <tr>
              <td>Store123d</td>
              <td>Chandigarh</td>
              <td>johndoe123@gmail.com</td>
              <td>XXXXXXXXX</td>
              <td>#715, b-20, Chandigarh</td>
              <td>22 February 2024</td>
              <td>Inactive</td>
              <td>
              <div className="action-icons">
                  <div className="pencil-icon">
                    <Link to="/EditMerchants">
                      <img src={pencilIcon} alt="pencil icon" />
                    </Link>
                  </div>
                  <div className="check-icon">
                    <img src={checkIcon} alt="check-icon" />
                  </div>
                </div>
              </td>
            </tr>

            {/* Content - 5 */}
            <tr>
              <td>Store123e</td>
              <td>Chandigarh</td>
              <td>johndoe123@gmail.com</td>
              <td>XXXXXXXXX</td>
              <td>#715, b-20, Chandigarh</td>
              <td>22 February 2024</td>
              <td>Inactive</td>
              <td>
              <div className="action-icons">
                  <div className="pencil-icon">
                    <Link to="/EditMerchants">
                      <img src={pencilIcon} alt="pencil icon" />
                    </Link>
                  </div>
                  <div className="check-icon">
                    <img src={checkIcon} alt="check-icon" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Merchants;
