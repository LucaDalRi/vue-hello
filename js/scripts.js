const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      textCss: 'regola-css',
      margin40: 'margin-40',
      anotherText: 'Sample of the sample text',
      niceImgHere: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    }
  }
}).mount('#app')