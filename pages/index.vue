<template>
  <v-container
    grid-list-md
    text-xs-center
  >
    <v-layout
      row
      wrap
      justify-center
      align-center
    >
      <v-flex xs12>
        <v-card>
          <v-img
            src="/header.jpg"
            alt="header"
          />
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline">
            桜島の降灰予報をあなたの手のひらで
          </v-card-title>
          <v-card-text>
            <a href="https://geo.itunes.apple.com/jp/app/ying-dao-feng-xiang-qing-bao/id585918324?mt=8">
              <img
                alt="Get it on App Store"
                src="https://linkmaker.itunes.apple.com/images/badges/ja-jp/badge_appstore-lrg.svg"
                height="50px"
              >
            </a>
            <a href="https://play.google.com/store/apps/details?id=megos.app.sakurawind&hl=ja&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1">
              <img
                class="gplay"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/ja_jp/badges/images/apps/ja-play-badge.png"
                height="58px"
              >
            </a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <p class="container text-center">
              Apple、Apple ロゴ、iPad、iPhone、iPod touch は米国および他の国々で登録された Apple Inc. の商標です。
              App Store は Apple Inc. のサービスマークです。
            </p>
            <p class="container text-center">
              Android、Google Play、Google Play ロゴは、Google Inc. の商標です。
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.gplay {
  vertical-align: -4px;
}
</style>
