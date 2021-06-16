<template>
  <v-app id="inspire">
    <!-- 侧边栏 -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- 抽屉 -->
        <v-list-item
          :to="item.link"
          v-for="item in items"
          :key="item.text"
          link
        >
          <!-- 抽屉格子 -->
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 抽屉名称 -->
        <v-subheader class="mt-4 grey--text text--darken-1"
          >用户中心</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 导航栏 -->
    <v-app-bar app clipped-left color="red" dense>
      <!-- 抽屉折叠按钮 -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- 标题logo -->
      <v-icon class="mx-4" large> mdi-youtube </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">全栈之巅</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="搜点啥...."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>
    <!-- 主要窗口 -->
    <v-main>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-trending-up", text: "主站", link: "/" },
        { icon: "mdi-trending-up", text: "热门课程", link: "/courses" },
        { icon: "mdi-history", text: "番剧" },
        { icon: "mdi-playlist-play", text: "游戏中心" },
        { icon: "mdi-clock", text: "直播" },
        { icon: "mdi-clock", text: "会员购" },
        { icon: "mdi-clock", text: "赛事" },
        { icon: "mdi-clock", text: "漫画" },
      ],
      items2: [
        { picture: 28, text: "Joseph" },
        { picture: 38, text: "Apple" },
        { picture: 48, text: "Xbox Ahoy" },
        { picture: 58, text: "Nokia" },
        { picture: 78, text: "MKBHD" },
      ],
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
