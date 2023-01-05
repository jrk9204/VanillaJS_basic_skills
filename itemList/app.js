// 로직 1 아이템 추가
// 로직 2 아이템 수정
// 로직 3 아이템 제거
// 로직 4 모든 아이템 제거

const inputValue = document.querySelector('.itemInput');
const submitBtn = document.querySelector('.submitInput');
const itemTitle = document.querySelector('.itemTitle');
const itemParents = document.querySelector('.itemListContainer');

//전역변수

let isEdit = false;
let editID = '';
let editElement = '';

//처음 실행 함수.

window.addEventListener('DOMContentLoaded', firstRendering);

submitBtn.addEventListener('click', submitTrigger);

// 아이템 추가 함수
// 아이템을 추가할때 아이템을 구별하기위해 아이템의 아이디가 추가되어야하고
// 해당 아이템의 편집 버튼과 삭제 버튼이 활성화 되어야한다.
function submitTrigger() {
    const itemListDom = document.createElement('article');
    const id = new Date().getTime().toString();
    const getInputValue = inputValue.value;

    if (getInputValue !== '' && !isEdit) {
        let attr = document.createAttribute('data-id');
        attr.value = id;

        itemListDom.setAttributeNode(attr);
        itemListDom.classList.add('grocery-item');
        itemListDom.innerHTML = `
        <div class="itemListWrapper">
        <div class="itemTitle">${getInputValue}</div>
        <div class="itemIconContainer">
        <div class="btn edit-btn">수정</div>
        <div class="btn delete-btn">삭제</div>
        </div>
        </div>`;

        itemParents.appendChild(itemListDom);
        const deleteItem = itemListDom.querySelector('.delete-btn');
        const editItem = itemListDom.querySelector('.edit-btn');
        deleteItem.addEventListener('click', deleteItemsFunc);
        editItem.addEventListener('click', editItemFunc);
        setdefaultValue();
        setLocalStorage(id, getInputValue);
    } else if (getInputValue !== '' && isEdit) {
        // displayAlert('value changed', 'success');

        // edit  local storage

        editElement.textContent = getInputValue;

        // inputValue.value = getInputValue;
        editLocalStorage(editID, getInputValue);

        setdefaultValue();
    }
}

function editLocalStorage(id, value) {
    let currLocalStorage = getLocalStorage();
    let newItems = currLocalStorage.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }

        return item;
    });

    localStorage.setItem('itemList', JSON.stringify(newItems));
}

function deleteItemsFunc(e) {
    const targetDom = e.currentTarget.parentElement.parentElement.parentElement;
    const deleteId = targetDom.dataset.id;

    itemParents.removeChild(targetDom);

    removeLocalStorage(deleteId);
}

function removeLocalStorage(targetId) {
    let getLocalList = getLocalStorage();

    let filterItems = getLocalList.filter(function (el) {
        if (el.id !== targetId) {
            return el;
        }
    });
    localStorage.setItem('itemList', JSON.stringify(filterItems));
}

function editItemFunc(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    inputValue.value = editElement.textContent;
    // inputValue.value = e.currentTarget.parentElement.previousElementSibling.textContent;

    editID = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
    isEdit = true;
}

function setdefaultValue() {
    inputValue.value = '';
    isEdit = false;
    editID = '';
}

function setLocalStorage(id, value) {
    let currLocalStorage = getLocalStorage();

    currLocalStorage.push({ id, value });

    window.localStorage.setItem('itemList', JSON.stringify(currLocalStorage));
}

function getLocalStorage() {
    return localStorage.getItem('itemList') ? JSON.parse(localStorage.getItem('itemList')) : [];
}

// 아이템들은 로컬 스토리지에 저장되기때문에 처음로딩할때 로컬 스토리지 확인 후 아이템들 가져옴

function firstRendering() {
    let firstRenderItems = getLocalStorage();

    if (firstRenderItems.length > 0) {
        firstRenderItems.forEach((item) => {
            createListItem(item.id, item.value);
        });
    }
}

function createListItem(id, itemValue) {
    const itemListDom = document.createElement('article');
    let attr = document.createAttribute('data-id');
    attr.value = id;

    itemListDom.setAttributeNode(attr);
    itemListDom.classList.add('grocery-item');
    itemListDom.innerHTML = `
        <div class="itemListWrapper">
        <div class="itemTitle">${itemValue}</div>
        <div class="itemIconContainer">
        <div class="btn edit-btn">수정</div>
        <div class="btn delete-btn">삭제</div>
        </div>
        </div>`;

    const deleteItem = itemListDom.querySelector('.delete-btn');
    const editItem = itemListDom.querySelector('.edit-btn');
    deleteItem.addEventListener('click', deleteItemsFunc);
    editItem.addEventListener('click', editItemFunc);
    itemParents.appendChild(itemListDom);
}
