export default defineAppConfig({
  title: 'Admin',
  workspace: {
    header: {
      height: 64,
      hover: {
        background: '#f6f6f6',
      },
    },
    sider: {
      width: 200,
      collapsedWidth: 65,
      background: '#fff',
    },
    content: {
      background: '#f5f7f9',
      padding: 10,
      header: {
        height: 40,
        size: 12,
      },
      footer: {
        height: 40,
        size: 12,
        text: 'Nuxt Admin ©2023 Created by zhuchentong',
      },
    },
    menu: {
      mode: 'vertical',
    },

  },
})
