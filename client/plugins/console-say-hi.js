/**
 * @desc Say hi in console
 */

'use strict'

export default () => {
  if (process.browser && process.env.NODE_ENV === 'production') {
    console.clear()
    console.info(
      `
            %c
      ██╗  ██╗██╗       ██╗███╗   ███╗         ██╗ ██████╗  ██████╗  ██████╗ ███████╗██████╗ ██╗
      ██║  ██║██║       ██║████╗ ████║         ██║██╔═══██╗██╔═══██╗██╔════╝ ██╔════╝██╔══██╗██║
      ███████║██║       ██║██╔████╔██║         ██║██║   ██║██║   ██║██║  ███╗█████╗  ██████╔╝██║
      ██╔══██║██║       ██║██║╚██╔╝██║    ██   ██║██║   ██║██║   ██║██║   ██║██╔══╝  ██╔══██╗╚═╝
      ██║  ██║██║▄█╗    ██║██║ ╚═╝ ██║    ╚█████╔╝╚██████╔╝╚██████╔╝╚██████╔╝███████╗██║  ██║██╗
      ╚═╝  ╚═╝╚═╝╚═╝    ╚═╝╚═╝     ╚═╝     ╚════╝  ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝
      %c
      人的平均寿命77岁
      一共28105天
      67w小时
      4047w分钟
      24亿秒左右
      这10秒你在读这段话，这10秒你属于我
      你好陌生人，我爱你 ❤️

      %c
      联系我：iamjooger@gmail.com`, 'color: #302e31;', 'color: #919191;font-weight: 400;font-size:12px', 'color: #333;text-decoration:underline')
  }
}
