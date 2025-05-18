// DOM 元素
const menuButton = document.querySelector('.menu-button');
const menuItems = document.querySelector('.menu-items');
const pageTransitionOverlay = document.querySelector('.page-transition-overlay');
const carousel = document.querySelector('.carousel');
const productGrid = document.querySelector('.product-grid');

// 菜单状态
let isMenuOpen = false;

// 菜单按钮点击事件
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menuButton.classList.toggle('active');
    menuItems.classList.toggle('active');
});

// 页面切换效果
function pageTransition(targetPage) {
    pageTransitionOverlay.style.visibility = 'visible';
    pageTransitionOverlay.style.opacity = '1';
    
    setTimeout(() => {
        // 这里可以添加页面切换逻辑
        pageTransitionOverlay.style.opacity = '0';
        setTimeout(() => {
            pageTransitionOverlay.style.visibility = 'hidden';
        }, 500);
    }, 500);
}

// 轮播图数据
const carouselData = [
    {
        title: '数字化云服务',
        description: '提供云计费、云计算、云机房、云电脑、云算力、云更新等全方位云服务解决方案，助力企业数字化转型',
        image: '第一部分图片/数字化云服务.jpg',
        link: './page1.html'
    },
    {
        title: '网盾实时监管',
        description: '实时监管上网行为，提供身份相关信息查询、活动轨迹查询、全面审计等功能，全方位提升系统安全性',
        image: '第一部分图片/网盾实时监管.jpg',
        link: '#network-security'
    },
    {
        title: 'IT数字化现场',
        description: '专业团队提供设备配置、安装和调试服务，确保系统快速部署，保障系统可靠性和稳定性',
        image: '第一部分图片/IT数字化现场.jpg',
        link: '#it-service'
    },
    {
        title: '实人认证系统',
        description: '结合先进的人脸防伪技术，有效防范翻拍、面具等虚假人脸，提升认证效率，保障监管安全',
        image: '第一部分图片/实人认证系统.jpg',
        link: '#face-auth'
    }
];

// 产品数据
const productData = [
    {
        title: '企业无盘系统',
        description: '基于云端存储技术，实现网吧终端无盘化部署，提供高效、安全、稳定的系统运行环境。',
        image: '第二部分图片/企业无盘系统.jpg',
        link: 'page1.html'
    },
    {
        title: '云计费系统',
        description: '新一代网吧计费系统，支持多种计费模式，提供完整的网吧运营解决方案。',
        image: '第二部分图片/云计费系统.jpg',
        link: '#'
    },
    {
        title: '天擎网盾',
        description: '全方位的网络安全防护系统，保障网吧运营安全。',
        image: '第二部分图片/天擎网盾.jpg',
        link: '#'
    },
    {
        title: '数字化现场服务',
        description: '专业的IT现场服务团队，提供及时、高效的技术支持。',
        image: '第二部分图片/数字化现场服务.jpg',
        link: '#'
    },
    {
        title: '全方位运营维护',
        description: '提供网吧运营全生命周期的维护服务，确保系统稳定运行。',
        image: '第二部分图片/全方位运营服务.jpg',
        link: '#'
    },
    {
        title: '电子硬件支持',
        description: '提供专业的硬件设备支持服务，确保网吧设备高效运转。',
        image: '第二部分图片/电子硬件支持.jpg',
        link: '#'
    }
];

// 业务方案数据
const solutionData = {
    'cloud-service': {
        title: '云服务',
        content: `
            <div class="solution-content">
                <p class="solution-description">协助企业将各类云服务与应用整合至统一平台，支持云资源的选择、部署、管理与监控，实现多云环境间的无缝对接与数据共享，全面提升业务的灵活性与运营效率。</p>
                <ul class="solution-features">
                    <li><i class="ri-cloud-line"></i>云更新</li>
                    <li><i class="ri-money-dollar-circle-line"></i>云计费</li>
                    <li><i class="ri-computer-line"></i>云计算</li>
                    <li><i class="ri-server-line"></i>云机房</li>
                    <li><i class="ri-game-line"></i>云网咖</li>
                    <li><i class="ri-computer-line"></i>云电脑</li>
                </ul>
            </div>
        `
    },
    'network-shield': {
        title: '网盾监管',
        content: `
            <div class="solution-content">
                <p class="solution-description">实时监控，历史IP和上下线记录数据存储，实名实人双认证，杜绝风险上网与身份冒用。</p>
                <ul class="solution-features">
                    <li><i class="ri-shield-check-line"></i>用户扫码即用，方便快捷，安全稳定，保护个人数据安全</li>
                    <li><i class="ri-shield-star-line"></i>降低合规风险，更好配合监管</li>
                </ul>
            </div>
        `
    },
    'after-sales': {
        title: '售后数字化服务',
        content: `
            <div class="solution-content">
                <p class="solution-description">借助数字化技术与创新的业务模式，提供包括现场运维、远程协助与客户管理在内的一体化功能，推动售后服务向智能化、高效化转型，助力企业全面提升运营效率、客户体验与市场竞争力。通过数字化转型，实现问题处理更及时，维护回应更快速。</p>
                <ul class="solution-features">
                    <li><i class="ri-customer-service-2-line"></i>专业的售后服务</li>
                    <li><i class="ri-team-line"></i>成熟的现场管理体系</li>
                    <li><i class="ri-global-line"></i>广域范围内的快速部署</li>
                    <li><i class="ri-computer-line"></i>远程协助秒解决</li>
                </ul>
            </div>
        `
    },
    'it-service': {
        title: 'IT数字化现场',
        content: `
            <div class="solution-content">
                <p class="solution-description">依托物联网、云计算与人工智能等前沿技术，实现 IT 设备的互联互通、远程监控与智能化管理。通过数字化现场解决方案，帮助企业高效整合设备、现场运维、远程诊断与故障修复，全面提升系统的稳定性和可靠性。</p>
                <ul class="solution-features">
                    <li><i class="ri-tools-line"></i>高效的现场布置能力</li>
                    <li><i class="ri-code-s-slash-line"></i>卓越的技术实施能力</li>
                    <li><i class="ri-team-line"></i>熟练的专业团队操作</li>
                </ul>
            </div>
        `
    },
    'software': {
        title: '相关软硬件配置',
        content: `
            <div class="solution-content">
                <p class="solution-description">我们提供多样化、可定制的软硬件配置方案，库存充足，满足不同行业和场景的个性化需求。客户可灵活选择所需设备与系统，搭配我们的专业技术支持与完善的后期运维服务，实现真正的"选配无忧、使用省心"。</p>
                <ul class="solution-features">
                    <li><i class="ri-apps-line"></i>管理软件支持</li>
                    <li><i class="ri-game-line"></i>游戏软件支持</li>
                    <li><i class="ri-money-dollar-circle-line"></i>计费软件支持</li>
                    <li><i class="ri-server-line"></i>服务器等大型硬件支持</li>
                    <li><i class="ri-hard-drive-2-line"></i>显卡、内存、路由等网络硬件支持</li>
                </ul>
            </div>
        `
    }
};

// 初始化轮播图
let currentSlide = 0;
let slideInterval;

function initCarousel() {
    if (!carousel) return;  // 添加空值检查
    
    // 清空轮播容器
    carousel.innerHTML = '';
    
    // 创建轮播图内容
    carouselData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `url(${slide.image})`;
        
        // 创建链接元素
        const linkElement = document.createElement('a');
        linkElement.href = slide.link;
        linkElement.className = 'btn';
        linkElement.textContent = '了解详情';
        
        // 添加点击事件监听器
        if (slide.link && slide.link !== '#') {
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = slide.link;
            });
        }
        
        slideElement.innerHTML = `
            <div class="slide-content">
                <h2 class="text-fade-in">${slide.title}</h2>
                <p class="text-fade-in">${slide.description}</p>
            </div>
        `;
        
        // 将链接添加到slide-content中
        slideElement.querySelector('.slide-content').appendChild(linkElement);
        carousel.appendChild(slideElement);
    });

    // 创建指示器
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';
    
    carouselData.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
        indicatorsContainer.appendChild(indicator);
    });
    
    carousel.appendChild(indicatorsContainer);
}

// 切换到指定幻灯片
function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // 移除当前活动状态
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // 更新当前幻灯片索引
    currentSlide = index;
    
    // 添加新的活动状态
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // 重置自动播放计时器
    resetSlideInterval();
}

// 自动播放下一张
function nextSlide() {
    const nextIndex = (currentSlide + 1) % carouselData.length;
    goToSlide(nextIndex);
}

// 重置自动播放计时器
function resetSlideInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000);
}

// 初始化产品展示
function initProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card scroll-reveal';
        
        // 创建产品卡片内容
        const cardContent = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <a href="${product.link}" class="btn" onclick="handleProductClick(event, '${product.link}')">了解详情</a>
            </div>
        `;
        
        card.innerHTML = cardContent;
        productGrid.appendChild(card);
    });
}

// 处理产品点击事件
function handleProductClick(event, link) {
    event.preventDefault();
    if (link && link !== '#') {
        window.location.href = link;
    }
}

// 滚动显示动画
function handleScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// 初始化业务方案板块
function initBusinessSolutions() {
    const menuItems = document.querySelectorAll('.menu-item');
    const solutionPanels = document.querySelectorAll('.solution-panel');

    // 初始化面板内容
    solutionPanels.forEach(panel => {
        const solutionId = panel.id;
        if (solutionData[solutionId]) {
            panel.innerHTML = solutionData[solutionId].content;
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有活动状态
            menuItems.forEach(i => {
                i.classList.remove('active');
                const indicator = i.querySelector('.menu-indicator');
                if (indicator) {
                    indicator.style.height = '0';
                    indicator.style.opacity = '0';
                }
            });
            solutionPanels.forEach(p => p.classList.remove('active'));

            // 添加新的活动状态
            item.classList.add('active');
            const solutionId = item.getAttribute('data-solution');
            document.getElementById(solutionId).classList.add('active');
        });

        // 优化鼠标悬停效果
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                const indicator = item.querySelector('.menu-indicator');
                if (indicator) {
                    indicator.style.height = '20px';
                    indicator.style.opacity = '0.5';
                }
            }
        });

        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                const indicator = item.querySelector('.menu-indicator');
                if (indicator) {
                    indicator.style.height = '0';
                    indicator.style.opacity = '0';
                }
            }
        });
    });
}

// 初始化页面
function initPage() {
    initCarousel();
    initProducts();
    
    // 启动自动播放
    resetSlideInterval();
    
    // 添加鼠标悬停暂停自动播放
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        resetSlideInterval();
    });
    
    // 滚动监听
    window.addEventListener('scroll', handleScrollReveal);
    
    // 初始检查一次滚动显示
    handleScrollReveal();
    initBusinessSolutions();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 