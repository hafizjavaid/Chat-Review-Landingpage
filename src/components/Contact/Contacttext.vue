<template>
  <!-- Left Side -->
  <v-col class="form_text" cols="12" md="6" order-md="1">
    <div class="form_text_inner">
      <h1 color="primary">Write to us</h1>
     
      <div class="contact_items">
        <p>
          <span
            ><svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.62733C0 1.45325 1.02975 0.501465 2.3 0.501465H20.7C21.9703 0.501465 23 1.45325 23 2.62733V15.3825C23 16.5566 21.9703 17.5084 20.7 17.5084H2.3C1.02975 17.5084 0 16.5566 0 15.3825V2.62733ZM20.7 4.61343V15.3825H2.3V4.61343L11.5 10.2824L20.7 4.61343ZM19.7768 2.62733H3.22321L11.5 7.72743L19.7768 2.62733Z"
                fill="white"
              />
            </svg>
          </span>
          hi@chatreview.com
        </p>
        <p>
          <span
            ><svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2639 11.1419C15.8317 10.7424 15.133 10.7424 14.7008 11.1419L12.9387 12.7706C12.1217 12.5458 10.5973 12.0349 9.63111 11.1419C8.66492 10.2489 8.11219 8.83984 7.86899 8.08474L9.63111 6.45603C10.0633 6.05652 10.0633 5.41076 9.63111 5.01125L5.20922 0.924147C4.77698 0.524633 4.07832 0.524633 3.64608 0.924147L0.648046 3.6952C0.227967 4.08347 -0.00860439 4.61684 0.000239384 5.16145C0.0256652 6.61645 0.442428 11.6702 4.75156 15.653C9.06068 19.6359 14.5283 20.0201 16.1036 20.0446C16.1092 20.0446 16.1291 20.0446 16.1346 20.0446C16.7183 20.0446 17.2699 19.8321 17.6878 19.4459L20.6858 16.6748C21.1181 16.2753 21.1181 15.6295 20.6858 15.23L16.2639 11.1419ZM16.1235 18C14.7439 17.9786 10.0235 17.6363 6.31469 14.2072C2.59368 10.7679 2.23329 6.38962 2.21118 5.13999L4.42765 3.09133L7.2864 5.73364L5.85703 7.0548C5.59282 7.29798 5.48006 7.64947 5.55634 7.98665C5.58287 8.10416 6.23178 10.8905 8.06686 12.5867C9.90195 14.2828 12.9166 14.8826 13.0437 14.9071C13.4118 14.9797 13.7888 14.8744 14.0519 14.6302L15.4824 13.3091L18.3411 15.9514L16.1235 18Z"
                fill="white"
              />
            </svg>
          </span>
          +1 44 546 1478
        </p>
        <p>
          <span
            ><svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M11.4284 7.99986C11.4284 9.8934 9.8934 11.4284 7.99986 11.4284C6.10632 11.4284 4.57129 9.8934 4.57129 7.99986C4.57129 6.10632 6.10632 4.57129 7.99986 4.57129C9.8934 4.57129 11.4284 6.10632 11.4284 7.99986Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8C0 14 8 20.5714 8 20.5714C8 20.5714 16 14 16 8C16 3.57714 12.4229 0 8 0C3.57714 0 0 3.57714 0 8ZM2.28571 8C2.28571 4.83951 4.83951 2.28571 8 2.28571C11.1605 2.28571 13.7143 4.83951 13.7143 8C13.7143 10.1265 12.2106 12.7195 10.2462 15.0698C9.45302 16.0189 8.65513 16.8459 8 17.4827C7.34487 16.8459 6.54698 16.0189 5.75378 15.0698C3.78936 12.7195 2.28571 10.1265 2.28571 8Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="20.5714" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Your Location
        </p>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  props: ["login"],
};
</script>

<style lang="scss" scoped>
.form_text {
  width: 100%;
  height: calc(100vh - 74px);
  background-color: #000051;
  display: flex;
@media(max-width:400px)
  {
    height: 50vh;
  }
  align-items: center;
  margin-top: -9px;
  @media (max-width: 960px) {
    justify-content: center;
    order: 2;
    margin-top: 20px;
  }
  .form_text_inner {
    margin-left: 65px;
    @media (max-width: 960px) {
      justify-content: center;
      margin-left: 0px;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      letter-spacing: 1.5px;
      color: #ffffff;
      margin: 0;
      padding: 0;
       @media (max-width: 400px) {
        font-size: 30px;
      }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 0;
      margin-top: 5px;
      padding: 0;
       @media (max-width: 400px) {
        font-size: 16px;
      }
    }
    .contact_items {
      margin-top: 10px;
      p {
        margin-bottom: 10px;

        span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
