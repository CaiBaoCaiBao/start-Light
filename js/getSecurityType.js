
// document.addEventListener('DOMContentLoaded', function () {
//         const securityTypeUrl = 'http://172.17.184.143//get_security_type';
//         let securityTypeList = [
//             { id: 0, type: '选择加密类型' },
//         ];
//         setTimeout(() => {
//             // 获取安全类型列表
//             fetch(securityTypeUrl).then(res => res.json())
//                 .then(data => {
//                     securityTypeList = data.security_type;
//                     const securityType = document.getElementById('securityType');
//                     securityType.innerHTML = securityTypeList.map(item => {
//                         return (`<option value="${item.id}">${item.type}</option>`);
//                     }).join('');
//                 });
//         });

// });