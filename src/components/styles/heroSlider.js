import styled from "styled-components";
import {colors} from "../common/element/elements.js";

export const Styles = styled.div`
  .hero-slider-area {
    
    .swiper-container {
      position: relative;
      .swiper-wrapper {
        .swiper-slide.slider-item {
          position: relative;
          .image-container {
            width: 100%;
            display: block;
            overflow: hidden;
            position: relative;
            height: 700px;
            img.slider-image {
              width: auto;
              margin-top: 0;
              transition: all 6000ms linear;
              transform: scale(1);
            }
            @media all and (min-width: 992px) {
            margin-top: 185px;
            }
            @media (max-width: 767px) {
              height: 450px;
              img.slider-image {
                width: 100%;
                height: 450px;
                margin-top: 0;
                transition: all 6000ms linear;
                transform: scale(1);
              }
            }
            @media (max-width: 575px) {
              height: 300px;
              img.slider-image {
                width: 100%;
                height: 300px;
                margin-top: 0;
                transition: all 6000ms linear;
                transform: scale(1);
              }
            }
          }
          .slider-table {
            display: table;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;
            .slider-tablecell {
              display: table-cell;
              vertical-align: middle;
              .slider-box {
                .slider-title {
                  h1 {
                    font-size: 46px;
                    font-weight: bold;
                    color: white;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                  }
                }
                .slider-desc {
                  p {
                    font-size: 20px;
                    color: #ffffff;
                    max-width: 700px;
                    margin-bottom: 32px;
                    font-weight: 600;
                    @media (max-width: 767px) {
                      font-size: 18px;
                      font-weight: 500;
                    }
                  }
                }
                .slider-btn {
                  a.slider-btn1 {
                    font-size: 14px;
                    color: #fff;
                    /* background: ${colors.gr_bg};*/
                    display: inline-block;
                    width: 145px;
                    height: 40px;
                    text-align: center;
                    padding: 11px;
                    border-radius: 5px;
                    &:hover {
                      background: ${colors.gr_bg2};
                    }
                  }
                  a.slider-btn2 {
                    font-size: 14px;
                    color: #fff;
                    display: inline-block;
                    /* background: ${colors.bg1};*/
                    width: 145px;
                    height: 40px;
                    text-align: center;
                    padding: 11px;
                    border-radius: 5px;
                    margin-left: 15px;
                    &:hover {
                      background: ${colors.bg1};
                      border: none;
                      color: #ffffff;
                    }
                  }
                }
                @media (max-width: 575px) {
                  text-align: center !important;
                }
              }
              .slider-box2 {
                .slider-desc {
                  h1 {
                    margin-left: auto;
                  }
                }
              }
            }
          }
        }
        .swiper-slide.slider-item.swiper-slide-visible.swiper-slide-active {
          .image-container {
            img.slider-image {
              transform: scale(1.15);
            }
          }
          .slider-table {
            .slider-tablecell {
              .slider-title {
                animation-name: fadeInDown;
                animation-duration: 1s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }
              .slider-desc {
                animation-name: fadeInUp;
                animation-duration: 1.5s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }
              .slider-btn {
                animation-name: fadeInUp;
                animation-duration: 2s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }
            }
          }
        }
      }
      .swiper-btn {
        position: absolute;
        top: 50%;
        left: 40px;
        width: 45px;
        height: 45px;
        font-size: 24px;
        color: ${colors.border1};
        text-align: center;
        padding-top: 5px;
        border-radius: 5px;
        transition: all 0.3s ease;
        margin-top: -35px;
        z-index: 111;
        i {
        }
        &:hover {
          background: ${colors.gr_bg};
          color: #ffffff;
        }
      }
      .swiper-btn.slider-button-next {
        left: inherit;
        right: 40px;
      }
      @media (max-width: 575px) {
        .swiper-btn {
          display: none;
        }
      }
    }
  }
`;
