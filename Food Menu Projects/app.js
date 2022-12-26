// 처음 데이터 로드할떄 window.addEventListener 로 dom 노드를 로딩시킨다.

const menuItems = [
    {
        title: 'a',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/660px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        price: '15 dollor',
        content: 'random text haha',
    },
    {
        title: 'b',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/660px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        price: '16 dollor',
        content: 'random text haha',
    },

    {
        title: 'c',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/660px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        price: '17 dollor',
        content: 'random text haha',
    },

    {
        title: 'd',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/660px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        price: '17 dollor',
        content: 'random text haha',
    },
];

// {
//     title: 'a',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/660px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
//     price: '15 dollor',
//     content: 'random text haha',
// },

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menuItems);
});

function displayMenuItems(itemData) {
    let dataStr = itemData.map((el) => {
        return `
        <article class="sectionContainer">
                    <div class="sectionWrapper">
                        <div class="leftContainer">
                            <img
                                src=${el.img}
                                alt="food"
                            />
                        </div>

                        <div class="rightContainer">
                            <div class="titleSection">
                                <span class="itemTitle"> ${el.title} </span>

                                <span class="itemPriace">${el.price}</span>
                            </div>

                            <div class="itemDesc">${el.content}</div>
                        </div>
                    </div>
        </article>

        `;
    });

    sectionCenter.innerHTML = dataStr.join('');
}
