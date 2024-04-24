/**
 * inputタグに文字が入力されるまたは消されるごとに値を更新
 * @param {string} className - 対象となるinputタグのclassName
 * @param {event} e - onChangeで取得してくるイベント
 * @param {Function} set - useStateのsetメソッド? 
 */
function handleInputChange(className, e, set) {
    e.preventDefault();
    const getInputTag = document.getElementsByClassName(className)[0];

    getInputTag.addEventListener('input', () => {
        set(getInputTag.value);
    });
}

export { handleInputChange };
