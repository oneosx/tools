//数字价格千分位分割
function NumberSplit(number) {
	return String(number).replace(/(?!^)(?=(\d{3})+$)/g, ',')
}

//手机号3-4-4分割
function FormatMobile(mobile, sep = '-') {
	const r = new RegExp(`(?<=[\\d${sep}]{8})\\d{1,4}`);
	const m = String(mobile).replace(/(?<=\d{3})\d+/, ($0) => sep + $0);
	return m.replace(r, ($0) => sep + $0)
}

//去除字符串的首尾空格
function Trim(str) {
	return str.replace(/^\s*|\s*$/g, '')
}

//HTML转义
function Escape(str) {
	const escapeMaps = {
		'&': 'amp',
		'<': 'lt',
		'>': 'gt',
		'"': 'quot',
		"'": '#39'
	};
	const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g');
	return str.replace(escapeRegexp, (match) => `&${escapeMaps[match]};`)
}

//HTML反转义
function Unescape(str) {
	const unescapeMaps = {
		'amp': '&',
		'lt': '<',
		'gt': '>',
		'quot': '"',
		'#39': "'"
	};
	const unescapeRegexp = /&([^;]+);/g;
	return str.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[unescapeKey] || match
  })
}

//获取网页中所有img标签的图片地址
function MatchImgs(html) {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi;
  const matchImgUrl = [];

  html.replace(imgUrlRegex, (match, $1) => {
    $1 && matchImgUrl.push($1)
  });

  return matchImgUrl
}

//通过name获取url query参数
function GetQueryByName(name) {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`);
  const queryNameMatch = window.location.search.match(queryNameRegex);
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : ''
}


export {
	NumberSplit,
	FormatMobile,
	Trim,
	Escape,
	Unescape,
	MatchImgs,
	GetQueryByName
}