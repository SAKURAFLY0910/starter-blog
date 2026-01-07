interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '时光画廊',
    description: `人生中遇到的印象深刻的人和值得记录的事情，包括玩伴、亲人、陌生人、食物烟火、感情经历、生活记录以及一些自我感动的事情。我把他们做成了画廊，我来过。`,
    imgSrc: '/static/images/gallery.png',
    href: 'https://wishing.icu/',
  },
  {
    title: '恋爱小笺',
    description: `记录二零二二年二月二十四之后一段日子里和她的点点滴滴，每一天都充满期待和憧憬，走进了自己的梦里，这就是我以为的乌托邦。只不过，后来，我的萝丝抛弃了我，我的乌托邦也随之崩塌，我的人生也完了。`,
    imgSrc: '/static/images/record.jpg',
    href: 'https://lovelog.sakurafly.com/',
  },
  {
    title: 'AI文本对话',
    description: `使用Deepseek的API，提供一个简单的文本对话界面，用户可以输入问题，AI会给出回答。这个项目旨在展示AI文本生成的能力和应用场景。`,
    imgSrc: '/static/images/brain.jpg',
    href: 'https://ai.wishing.icu/',
  },
  {
    title: '导航网站',
    description: `一个简洁实用的导航网站，收录了各种常用工具和资源，帮助用户快速找到所需内容，提高工作和生活效率。包含代码、图片、视频、海淘、在线工具等多个分类...`,
    imgSrc: '/static/images/searching.png',
    href: 'https://daohang.sakurafly.com/',
  },
]

export default projectsData
