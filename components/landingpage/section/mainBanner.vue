<template>
  <div class="hero-section position-relative overflow-hidden bg-background">
    <v-container>
      <div class="maxWidth position-relative">
        <v-row>
          <v-col cols="12" md="3" class="d-none d-md-block">
            <img
              src="/images/landingpage/background/banner-bg-1.png"
              alt="MaterialM"
              class="float-end"
            />
            <img
              src="/images/landingpage/background/banner-widget-1.svg"
              alt="MaterialM"
              class="animted-img"
            />
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column">
            <h1
              class="text-center text-64 hero-title mt-12 mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Most Elegant
              <span class="font-weight-regular d-block">Admin Dashboard</span>
            </h1>
            <div
              class="d-flex gap-3 justify-center"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div
                class="border border-dashed py-2 px-4 rounded-xs text-center"
              >
                <h5 class="text-21">75+</h5>
                <span class="textSecondary text-12 font-weight-medium"
                  >Demo Pages</span
                >
              </div>
              <div
                class="border border-dashed py-2 px-4 rounded-xs text-center"
              >
                <h5 class="text-21">12+</h5>
                <span class="textSecondary text-12 font-weight-medium"
                  >Apps</span
                >
              </div>
              <div
                class="border border-dashed py-2 px-4 rounded-xs text-center"
              >
                <h5 class="text-21">45+</h5>
                <span class="textSecondary text-12 font-weight-medium"
                  >UI Components</span
                >
              </div>
            </div>
            <div
              class="mt-8 d-sm-flex justify-center gap-3"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <v-btn
                target="_blank"
                to="/auth/Login"
                color="primary"
                size="large"
                class="m-btn-full px-12"
                flat
                >Login</v-btn
              >
              <v-btn
                to="/dashboards/ecommerce"
                color="primary"
                variant="outlined"
                class="mt-sm-0 mt-4 lp-btn-shadow m-btn-full px-8"
                size="large"
                >Live Preview</v-btn
              >
            </div>
            <div class="d-none d-md-block mt-auto">
              <img
                src="/images/landingpage/background/banner-bg-3.png"
                alt="MaterialM"
                class="w-100"
              />
            </div>
          </v-col>

          <v-col cols="12" md="3" class="d-none d-md-block">
            <img
              src="/images/landingpage/background/banner-widget-2.svg"
              alt="MaterialM"
              class="animted-img-2"
            />
            <img
              src="/images/landingpage/background/banner-bg-2.png"
              alt="MaterialM"
              class="float-start"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
