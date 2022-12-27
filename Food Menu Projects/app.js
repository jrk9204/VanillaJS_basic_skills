// 처음 데이터 로드할떄 window.addEventListener 로 dom 노드를 로딩시킨다.

const menuItems = [
    {
        title: '비빔밥',
        img: 'https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_1280.jpg',
        price: '10,000 원',
        content: '한국 전통 음식 비빔밥',
        category: '한식',
    },
    {
        title: '딤섬',
        img: 'https://cdn.pixabay.com/photo/2017/02/08/04/49/dumplings-2047770__480.jpg',
        price: '7,000 원',
        content: '중국 고유의음식 딤섬',
        category: '중식',
    },

    {
        title: '짬뽕',
        img: 'https://media.istockphoto.com/id/1395717964/photo/squid-champong-champong-veggies.jpg?b=1&s=170667a&w=0&k=20&c=hirEywgKOyyZO9dDFENyMi-DKLGlRylBmHJayfVuhfE=',
        price: '8,000 원',
        content: '한국인을 위한 얼큰한 짬뽕',
        category: '중식',
    },

    {
        title: '짜장면',
        img: 'https://cdn.pixabay.com/photo/2018/12/04/15/20/chinese-3855829__480.jpg',
        price: '8,000 원',
        content: '고소하고 짭짤한 짜장면',
        category: '중식',
    },

    {
        title: '초밥',
        img: 'https://cdn.pixabay.com/photo/2016/04/26/03/55/salmon-1353598__480.jpg',
        price: '12,000 원',
        content: '일본 장인이 만든 장인 연어초밥',
        category: '일식',
    },

    {
        title: '삼각김밥',
        img: 'https://cdn.pixabay.com/photo/2016/12/20/03/25/rice-ball-1919629__480.jpg',
        price: '7,000 원',
        content: '일본인이 즐겨먹는 간편식 삼각김밥',
        category: '일식',
    },

    {
        title: '삼겹살',
        img: 'https://media.istockphoto.com/id/957773382/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%B2%A0-%ED%81%90-%EB%B3%B4-%EC%8C%88.jpg?s=612x612&w=is&k=20&c=dXtmYjJ-1VDdPbSNINSOhO4qYTs5ie2xcLP1lT69EIU=',
        price: '20,000 원',
        content: '한국인이 제일 좋아하는 고기 삼겹살',
        category: '한식',
    },
    {
        title: '바닐라 아이스크림',
        img: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg',
        price: '5,000 원',
        content: '아이스크림의 기본 바닐라 아이스크림',
        category: '디저트',
    },
    {
        title: '케이크',
        img: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__480.jpg',
        price: '20,000 원',
        content: '부족한 배를 채워줄 초코 케이크',
        category: '디저트',
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnWrapper = document.querySelector('.navWrapper');
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menuItems);
    navItems();
});

function navItems() {
    const category = menuItems.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['전체']
    );

    const categoryBtns = category
        .map(function (cateBtn) {
            return `<button class="navBtn" data-btnid= ${cateBtn}>${cateBtn}</button>`;
        })
        .join('');

    btnWrapper.innerHTML = categoryBtns;

    const filterBtn = btnWrapper.querySelectorAll('.navBtn');

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let categoryName = e.currentTarget.dataset.btnid;
            let menuCategory = menuItems.filter(function (menuItem) {
                if (menuItem.category === categoryName) {
                    return menuItem;
                }
            });

            if (categoryName === '전체') {
                displayMenuItems(menuItems);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

function displayMenuItems(itemData) {
    let dataStr = itemData.map((el) => {
        return `
        <article class="sectionContainer">
                        <img
                            class="foodPhoto"
                            src=${el.img}
                            alt="food"
                        />

                        <div class="rightContainer">
                            <div class="titleSection">
                                <h4 class="itemTitle"> ${el.title} </h4>
                                <h4 class="itemPriace">${el.price}</h4>
                            </div>
                            <p class="itemDesc">${el.content}</p>
                        </div>
        </article>
        `;
    });

    sectionCenter.innerHTML = dataStr.join('');
}
