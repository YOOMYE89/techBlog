

export default {
    namespaced: true,
    state: () => ({
        // 임시 슬라이더
        hSliderItems:[
            {
                id:'1',
                title:'First',
                type:'Featured post',
                createDate: new Date(),
                content:'This is a wider card with supporting text below as a natural lead-in to additional content.',
                addUrl:'https://naver.com',
                imgUrl:'https://img.hankyung.com/photo/202012/01.24861455.1.jpg'
            },
            {
                id:'2',
                title:'Second',
                type:'Featured post',
                createDate: new Date(),
                content:'This is a wider card with supporting text below as a natural lead-in to additional content.',
                addUrl:'https://naver.com',
                imgUrl:'https://mblogthumb-phinf.pstatic.net/MjAxOTA5MjVfMjk2/MDAxNTY5MzcxNzI2NjE2.XFYeRXTBY3TdXFcF5gRlxJJG4G2Od3y21YCWjUP3PgAg.ko2K1-AP8EK_017n9lPoPghdPPRUB8ON_F5Vjcekg-Yg.JPEG.eett7777/IMG_6555.jpg?type=w800'
            },
            {
                id:'3',
                title:'Third',
                type:'Featured post',
                createDate: new Date(),
                content:'This is a wider card with supporting text below as a natural lead-in to additional content.',
                addUrl:'https://naver.com',
                imgUrl:'https://t1.daumcdn.net/cfile/tistory/999E66495C04810D18'
            }
        ],
        // 임시 공지사항
        noticeLists:[
            {
                id:'1',
                title:'First Notice',
                createDate: new Date(),
                author:'Koios',
                memberinfo:'',
                content: `<p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                <hr>
                <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <h2>Heading</h2>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <h3>Sub-heading</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <pre><code>Example code block</code></pre>
                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                <h3>Sub-heading</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <ul>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                <ol>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                </ol>
                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>`
            },
            {
                id:'2',
                title:'Second Notice',
                createDate: new Date(),
                author:'Koios',
                memberinfo:'',
                content:`<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`
            }
        ]
    }),
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}