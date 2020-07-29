import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="header_inner clearfix">
                <div className="logo_wrapper">
                  <a href="index.html" className="logo">
                    <img src="images/logo-xehomnay.png" alt="" />
                  </a>
                </div>
                <div className="menu_wrapper">
                  <div className="navbar navbar_">
                    <div className="navbar-inner navbar-inner_">
                      <a className="btn btn-navbar btn-navbar_" data-toggle="collapse" data-target=".nav-collapse_"></a>
                      <div className="nav-collapse nav-collapse_ collapse">
                        <ul className="nav sf-menu clearfix">
                          <li className="active">
                            <a href="index.html">Giới thiệu</a>
                          </li>
                          <li>
                            <a href="index-1.html">xe du lịch</a>
                          </li>
                          <li>
                            <a href="index-2.html">xe văn phòng</a>
                          </li>
                          <li>
                            <a href="index-3.html">xe cưới</a>
                          </li>
                          <li>
                            <a href="index-4.html">xe tháng</a>
                          </li>
                          <li>
                            <a href="index-5.html">xe tự lái</a>
                          </li>
                          <li>
                            <a href="index-6.html">Liên hệ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
