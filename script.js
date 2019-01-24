'use strict';

const stylesString = `
  background-color: #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;

/**
 * Функция принимает строку со стилями
 * и возвращает объект у которого
 * названия CSS свойств это ключи
 * значения - строки
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString
    .split(';')
    .map(i => i.trim().split(': '))
    .filter(i => i[0].length !== 0)
    .map(i => resultObject[i[0]] = i[1]);

  return resultObject;
}

const EXPECTED_OBJECT = {
  "background-color": "#fff",
  "-webkit-border-radius": "5px",
  "border-radius": "5px",
  "border": "1px solid #e8e8e8",
  "-webkit-box-sizing": "border-box",
  "box-sizing": "border-box",
  "clear": "both",
  "cursor": "pointer",
  "float": "left",
  "font-family": "inherit",
  "font-size": "14px",
  "font-weight": "400",
  "height": "42px",
  "line-height": "40px",
  "outline": "0",
  "padding-left": "18px",
  "padding-right": "30px",
  "position": "relative",
  "text-align": "left !important",
  "-webkit-transition": "all .2s ease-in-out",
  "transition": "all .2s ease-in-out",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "user-select": "none",
  "white-space": "nowrap",
  "width": "auto",
};


console.assert(
  JSON.stringify(EXPECTED_OBJECT) === JSON.stringify(convertToObject(stylesString)),
  'Object is not equal to expected value'
);

console.log(convertToObject(stylesString));
