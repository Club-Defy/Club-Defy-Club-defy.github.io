let shown = false;
barba.init({

  views: [{
        namespace: 'home',
        beforeEnter(data) {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
            // sidmenu
            sidmenu();
            
            function fetchdefyApliData(){
                fetch("defyapi.php")
                    .then(response => response.json())
                    .then(data => {
                    console.log(data)
                    let data_setup = data['data']
                    data_setup.map((x) =>{
                        const {id,last_updated,name,quote} = x;
                        let quote_type = quote['INR'];
                        if(name == 'Bitcoin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                        
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.bitVal').text(percent_change_1h)
                            $('.valueIconBit i').addClass(up_down_class)
                            $('.valueBitcoin').addClass(red_blue)
                        }
                        if(name == 'Ethereum'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.EthereumVal').text(percent_change_1h)
                            $('.valueIconEth i').addClass(up_down_class)
                            $('.valueEthereum').addClass(red_blue)
                        }
                        
                        if(name == 'Binance Coin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.BinanceCoin').text(percent_change_1h)
                            $('.valueIconBinC i').addClass(up_down_class)
                            $('.valueBinC').addClass(red_blue)
                        }
                        
                        if(name == 'Tether'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.USDTTether').text(percent_change_1h)
                            $('.valueIconUSDT i').addClass(up_down_class)
                            $('.valueUSDT').addClass(red_blue)
                        }
                        
                        if(name == 'Solana'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.SolanaVal').text(percent_change_1h)
                            $('.valueIconSolana i').addClass(up_down_class)
                            $('.valueSolana').addClass(red_blue)
                        }
                        
                        if(name == 'Cardano'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.CardanoVal').text(percent_change_1h)
                            $('.valueIconCardano i').addClass(up_down_class)
                            $('.valueCardano').addClass(red_blue)
                        }
                        
                        if(name == 'XRP'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.XRPVal').text(percent_change_1h)
                            $('.valueIconXRP i').addClass(up_down_class)
                            $('.valueXRP').addClass(red_blue)
                        }
                        
                        if(name == 'Polkadot'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.PolkadotVal').text(percent_change_1h)
                            $('.valueIconPolkadot i').addClass(up_down_class)
                            $('.valuePolkadot').addClass(red_blue)
                        }
                        
                        if(name == 'USD Coin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.USDCoinVal').text(percent_change_1h)
                            $('.valueIconUSD i').addClass(up_down_class)
                            $('.valueUSD').addClass(red_blue)
                        }
                        
                        if(name == 'Dogecoin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.DogecoinVal').text(percent_change_1h)
                            $('.valueIconDogecoin i').addClass(up_down_class)
                            $('.valueDogecoin').addClass(red_blue)
                        }
                        if(name == 'SHIBA INU'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.ShibaInuVal').text(percent_change_1h)
                            $('.valueIconShibaInu i').addClass(up_down_class)
                            $('.valueShibaInu').addClass(red_blue)
                        }
                        
                    if(name == 'Avalanche'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.AvalancheVal').text(percent_change_1h)
                            $('.valueIconAvalanche i').addClass(up_down_class)
                            $('.valueAvalanche').addClass(red_blue)
                        }
                        
                        if(name == 'Terra'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.TerraVal').text(percent_change_1h)
                            $('.valueIconTerra i').addClass(up_down_class)
                            $('.valueTerra').addClass(red_blue)
                        }
                        
                        if(name == 'Litecoin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.LitecoinVal').text(percent_change_1h)
                            $('.valueIconLitecoin i').addClass(up_down_class)
                            $('.valueLitecoin').addClass(red_blue)
                        }
                        
                    if(name == 'Crypto.com Coin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.CryptocomCoinVal').text(percent_change_1h)
                            $('.valueIconCryptoCoin i').addClass(up_down_class)
                            $('.valueCryptoCoin').addClass(red_blue)
                        }
                        
                    if(name == 'Wrapped Bitcoin'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.WrappedBitcoinVal').text(percent_change_1h)
                            $('.valueIconWrappedBitcoin i').addClass(up_down_class)
                            $('.valueWrappedBitcoin').addClass(red_blue)
                        }
                        
                if(name == 'Uniswap'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.UniswapVal').text(percent_change_1h)
                            $('.valueIconUniswap i').addClass(up_down_class)
                            $('.valueUniswap').addClass(red_blue)
                        }
                        
                        if(name == 'Chainlink'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.ChainlinkVal').text(percent_change_1h)
                            $('.valueIconChainlink i').addClass(up_down_class)
                            $('.valueChainlink').addClass(red_blue)
                        }
                        if(name == 'Binance USD'){
                        let percent_change_1h = quote_type['percent_change_1h']
                        let up_down_class = 'fas fa-sort-up';
                        let red_blue = 'valueUp'; 
                    
                        if(percent_change_1h <0){
                            up_down_class = 'fas fa-sort-down';
                            red_blue = 'valueDown'; 
                        }
                            
                            $('.BinanceUSDVal').text(percent_change_1h)
                            $('.valueIconBinanceUSD i').addClass(up_down_class)
                            $('.valueBinanceUSD').addClass(red_blue)
                        }
                        
                    
                        
                        })
                    })
                }
                fetchdefyApliData()
                setInterval(function(){ 
                    fetchdefyApliData()
                }, 5000);

            // testimonial
            $('.testimonialMain').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 4500,
                smartSpeed: 2050,
                fluidSpeed: 500,
                nav: true,
                autoplayHoverPause: true,
                center: true,
                responsive: {
                    0: {
                        items: 1,
                        // smartSpeed: 3675,
                        autoplayTimeout: 4500,
                    },
                    768: {
                        items: 1.5,
                    },
                    1024: {
                        items: 2.5,
                    },
                    1440: {
                        items: 3.5,
                    },
                    2560: {
                        items: 3.5,
                    }
                }
            });

            // page top
            sTop();

        },
    },{
        namespace: 'about',
        beforeEnter(data) {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };

            // sidmenu
            sidmenu();
            
            // team slider 
            $(document).ready(function() {

                const slider = $('.slider-vertical');
                
                function onSliderAfterChange(event, slick, currentSlide) {
                  $(event.target).data('current-slide', currentSlide);
                }
                
                function onSliderWheel(e) {
                  var deltaY = e.originalEvent.deltaY,
                    $currentSlider = $(e.currentTarget),
                    currentSlickIndex = $currentSlider.data('current-slide') || 0;
                  
                  if (
                    // check when you scroll up
                    (deltaY < 0 && currentSlickIndex == 0) ||
                    // check when you scroll down
                    (deltaY > 0 && currentSlickIndex == 4)
                    
                  ) {
                    return;
                  }
              
                  e.preventDefault();
              
                  if (e.originalEvent.deltaY < 0) { 
                    $currentSlider.slick('slickPrev');
                  } else {
                    $currentSlider.slick('slickNext');
                  }
                }
                
                slider.each(function(index, element) {
                  var $element = $(element);
                  // set the length of children in each loop
                  // but the better way for performance is to set this data attribute on the div.slider in the markup
                  $element.data('slider-length', $element.children().length);
                })
                .slick({
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoPlay: true,
                    vertical: true,
                    verticalSwiping: true,
                    centerPadding: '50px',
                    arrows: true,
                    prevArrow: false,
                    nextArrow: false,
                    responsive: [ {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ],
                })
                .on('afterChange', onSliderAfterChange)
                .on('wheel', onSliderWheel);
              
              });

            // page top
            sTop();

        },
    },{
        namespace: 'landingPage',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'bitcoin',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'ethereum',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'ripple',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'stellarLumens',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'basicAttentionToken',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'usdCoin',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'career',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'medKit',
        beforeEnter(data) {

            // sidmenu
            sidmenu();
            

            // page top
            sTop();

        },
    },{
        namespace: 'faq',
        beforeEnter(data) {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };

            // sidmenu
            sidmenu();

            // accordion
            const items = document.querySelectorAll(".accordion a");
            
            function toggleAccordion() {
              const itemToggle = this.getAttribute('aria-expanded');
              
              for (i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
              }
              
              if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
              }
            }

            items.forEach(item => item.addEventListener('click', toggleAccordion));

            $('.ui.accordion').accordion({
                selector: {
             
                }
            });        
            

            // faq
          
            let faqSearch = document.getElementById('faqInput');

        
            faqSearch.addEventListener('keyup', function(e) {
                    e.preventDefault();
                    let searchValue = faqSearch.value.toLowerCase();
                    let contentClass = document.querySelectorAll('.content');
                    faqSearch.scrollIntoView({behavior: "smooth", block: "center"});

                    if($('.content').hasClass('active')){
                        $('.content').removeClass('active')
                    }

                    let faqItems = document.querySelectorAll('.content h2');
                    let faqSugg = document.querySelector('.faqSuggessions')
                    faqSugg.innerHTML = "";

                    faqItems.forEach(item => {
                        e.preventDefault();
                    
                        let pItem = item.innerHTML.toLowerCase();
                        let pItem2 = item.innerHTML;
                        if (pItem.includes(searchValue) && item.parentElement.parentElement.classList.contains('active') == false) {
                            //console.log(pItem)  
                            if(searchValue === "" && pItem.includes(searchValue)){
                                faqSugg.classList.remove('faqSuggessionsActive'); 
                            }
                            else{
                                faqSugg.style.display = 'block';
                                faqSugg.classList.add('faqSuggessionsActive');
                                let pEl = document.createElement('p');
                                pEl.classList.add('drop');
                                pItemUpper = pItem.charAt(0).toUpperCase() + pItem.slice(1);

                                pEl.innerHTML = `${pItem2}`;
                                console.log(pItem.charAt(0).toUpperCase())
                                faqSugg.appendChild(pEl);
                    
                                pEl.addEventListener('click', function(e){
                                      
                                    e.preventDefault();
                                    faqSearch.blur();
                                    
                                    setTimeout(()=> {
                                    
                                    let dropItem = this.innerHTML.toLowerCase();
                                    if (pItem.includes(dropItem) && item.parentElement.parentElement.classList.contains('active') == false) {
                                        item.parentElement.classList.add('active');
                                        //console.log(item.parentElement.classList) 
                                        faqSugg.style.display = 'none';
                                        item.scrollIntoView({behavior: "smooth"},500);
                                        // item.focus();
                                    }
                                },300);
                            });
                            }
                        }
                    }); 
            });

            sTop();

            
        },
    },{
        namespace: 'blockchainGlossary',
        beforeEnter(data) {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
            // sidmenu
            sidmenu();

            // click scroll
            let buttons = document.querySelectorAll('.blockCahinListBtn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    let buttonValue = this.innerHTML;
                    let buttonValue2 = buttonValue.toLowerCase();
                    let glossaryItems = document.querySelectorAll('.alpha');
                    glossaryItems.forEach(item => {
                        let pItem = item.innerHTML.toLowerCase();
                        if (pItem.includes(buttonValue2)) {
                            item.scrollIntoView({behavior: "smooth"},2000);
                        }
                    });
                });
            });
            
            // search
              
            let glossarySearch = document.getElementById('glossaryInput');

        
            glossarySearch.addEventListener('keyup', function(e) {
                    e.preventDefault();
                    let searchValue = glossarySearch.value.toLowerCase();
                    let searchValueFirstLetter = searchValue.charAt(0).toLowerCase();
                    glossarySearch.scrollIntoView({behavior: "smooth", block: "center"});

                    let glossaryItems = document.querySelectorAll('.title');
                    let faqSugg = document.querySelector('.faqSuggessions')
                    faqSugg.innerHTML = "";

                    glossaryItems.forEach(item => {
                        e.preventDefault();
                    
                        let pItem = item.innerHTML.toLowerCase();
                        let pItemFirstLetter = item.innerHTML.charAt(0).toLowerCase();
                        let pItem2 = item.innerHTML;
                        if (pItem.includes(searchValue) && pItem.startsWith(searchValueFirstLetter) && item.parentElement.parentElement.classList.contains('active') == false) {
                            //console.log(pItem)  
                            if(searchValue === "" && pItem.includes(searchValue)){
                                faqSugg.classList.remove('faqSuggessionsActive'); 
                            }
                            else{
                                faqSugg.style.display = 'block';
                                faqSugg.classList.add('faqSuggessionsActive');
                                let pEl = document.createElement('p');
                                pEl.classList.add('drop');
                                pItemUpper = pItem.charAt(0).toUpperCase() + pItem.slice(1);

                                pEl.innerHTML = `${pItem2}`;
                                console.log(pItem.charAt(0).toUpperCase())
                                faqSugg.appendChild(pEl);
                    
                                pEl.addEventListener('click', function(e){
                                      
                                    e.preventDefault();
                                    glossarySearch.blur();
                                    
                                    setTimeout(()=> {
                                    let dropItem = this.innerHTML.toLowerCase();
                                    if (pItem.includes(dropItem) && item.parentElement.parentElement.classList.contains('active') == false) {
                                        item.parentElement.classList.add('active');
                                        //console.log(item.parentElement.classList)
                                        faqSugg.style.display = 'none';
                                        item.scrollIntoView({behavior: "smooth"},500);
                                        // item.focus();
                                    }
                                },300);
                            });
                            }
                        }
                    }); 
            });
             
            // page top
            sTop();

        },
    },
  ],
});


// sidemenu
function sidmenu() {
    $('.navBarBox').click(function(){
        $('.sidemenu').addClass('sidemenuActive');
    });
    $('.sidemenuColse').click(function(){
        $('.sidemenu').removeClass('sidemenuActive');
    })
}

// page top
function sTop() {
  return $(window).scrollTop(0);
}


// bannerMainSlider
// $('.bannerMainSlider').owlCarousel({
//     loop: true,
//     margin: 0,
//     autoplay: true,
//     autoplaySpeed: 10000,
//     autoplayHoverPause: true,
//     slideTransition: 'linear',
//     responsive: {
//         0: {
//             items: 1.1,
//             nav: true,
//         },
//         768: {
//             items: 3,
//             nav: true,
//         },
//         1024: {
//             items: 4,
//             nav: true,
//         },
//         1440: {
//             items: 5,
//             nav: true,
//         },
//         2560: {
//             items: 5,
//             nav: true,
//         }
//     }
// });

// animation top   
// $(window).scroll(function() {     
//     $('.animTop').each(function(){
//         var imagePos = $(this).offset().top;

//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+500) {
//             $(this).css({
//                 marginTop: '50px',
//                 opacity: '1',
//             });
//         }
//         else{
//             $(this).css({
//                 marginTop: '80px',
//                 opacity: '0',
//             });
//         }
//     });

    // animation right            
    // $('.animRight').each(function(){
    //     var imagePos = $(this).offset().top;

    //     var topOfWindow = $(window).scrollTop();
    //     if (imagePos < topOfWindow+500) {
    //         $(this).addClass("animRightActive");
    //     }
    //     else{
    //         $(this).removeClass("animRightActive");
    //     }
    // });

    // animation left
//     $('.animLeft').each(function(){
//         var imagePos = $(this).offset().top;

//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+500) {
//             $(this).addClass("animLeftActive");
//         }
//         else{
//             $(this).removeClass("animLeftActive");
//         }
//     });
// });
   
// var slickCarousel = $('.slider-vertical');
// slickCarousel.slick({
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoPlay: true,
//     vertical: true,
//     verticalSwiping: true,
//     centerPadding: '50px',
//     arrows: true,
//     prevArrow: false,
//     nextArrow: false,
//     responsive: [ {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         }
//     ],
// });


//mouse wheel
// slickCarousel.mousewheel(function(e) {
// e.preventDefault();
//     if (e.deltaY < 0) {
//         $(this).slick('slickNext'); 
//     }else {
//         $(this).slick('slickPrev');
//     }
// });


// const $slider = $(".slider-vertical");
// $slider
// 	.on('init', () => {
// 		mouseWheel($slider)
// 	})
// 	.slick({
// 		dots: true,
// 		vertical: true,
// 		infinite: false,
// 	})
// function mouseWheel($slider) {
// 	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
// }
// function mouseWheelHandler(event) {
// 	event.preventDefault()
// 	const $slider = event.data.$slider
// 	const delta = event.originalEvent.deltaY
// 	if(delta < 0) {
// 		$slider.slick('slickPrev')
// 	}
// 	else {
// 		$slider.slick('slickNext')
// 	}
// }

