import styled from "styled-components";
import {colors} from "../common/element/elements.js";

export const Styles = styled.div`

    .tab-section {
    cursor: pointer;
        background: ${colors.bg2};
        padding   : 70px 0 65px;
        text-transform: capitalize;
        

        .nav {
            background-color: #ffffff;
            border-radius : 5px;
            border  : 1px solid ${colors.border1};
            overflow: hidden;

            .nav-item {
                a.nav-link {
                    font-size    : 15px;
                    color        : ${colors.black1};
                    border-bottom: 1px solid ${colors.border1};
                    padding      : 18px 25px;

                    i {
                        color: ${colors.green};
                    }
                }

                a.nav-link.active {
                    background: ${colors.gr_bg};
                    color     : #ffffff;

                    i {
                        color: #ffffff;
                    }
                }

                &:last-child {
                    a.nav-link {
                        border-bottom: none;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }

        .tab-content {
            .tab-pane {
                h4.tab-title {
                    color        : ${colors.green};
                    font-weight  : 600;
                    text-transform: capitalize;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }

                p.tab-desc {
                    font-size    : 15px;
                    color        : ${colors.black1};
                    line-height  : 30px;
                    text-transform: capitalize;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        font-size: 14px;
                    }
                }
                
                a.readmore-btn {
                font-size : 14px;
                color     : #fff;
                background: ${colors.gr_bg};
                display   : inline-block;
                width     : 125px;
                height    : 80px;
                text-align: center;
                padding   : 11px;
                border-radius : 5px;
                margin-top: 40px;
                

                &:hover {
                    background: ${colors.gr_bg2};
                }

                @media(max-width: 575px) {
                    margin-top : 0;
                }
            }
            a.learnmore-btn {
                font-size : 14px;
                color     : #fff;
                background: ${colors.gr_bg};
                display   : inline-block;
                width     : 100px;
                height    : 40px;
                text-align: center;
                padding   : 11px;
                border-radius : 5px;
                margin-top: 40px;
                

                &:hover {
                    background: ${colors.gr_bg2};
                }

                @media(max-width: 575px) {
                    margin-top : 0;
                }
            }
        }

                ul.check-list {
                    li {
                        font-size    : 15px;
                        color        : ${colors.green};
                        margin-bottom: 20px;
                        line-height  : 25px;

                        i {
                            float : left;
                            color : ${colors.green};
                            border: 1px solid ${colors.border3};
                            width : 35px;
                            height: 35px;
                            border-radius : 50%;
                            text-align  : center;
                            padding-top : 9px;
                            margin-top  : 7px;
                            margin-right: 15px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media(max-width: 575px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 35px 0 30px;
        }
    }
`;
