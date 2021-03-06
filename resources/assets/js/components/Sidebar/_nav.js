export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            title: true,
            name: 'Management Member',
            wrapper: {            // optional wrapper object
                element: "span",      // required valid HTML5 element tag
                attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ""             // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Member',
            url: '/member',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Verify & Deactive',
                    url: '/member/verify-and-deactive',
                    icon: 'icon-puzzle'
                }
            ]
        },
        {
            title: true,
            name: 'Management Trings',
            wrapper: {            // optional wrapper object
                element: "span",      // required valid HTML5 element tag
                attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ""             // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Trings',
            url: '/trings',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Product',
                    url: '/trings/product',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Category',
                    url: '/trings/category',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Shipping',
                    url: '/trings/shipping',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'History',
                    url: '/trings/history',
                    icon: 'icon-puzzle'
                }
            ]
        },
        {
            title: true,
            name: 'Extras'
        },
        {
            name: 'Components',
            url: '/components',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Buttons',
                    url: '/components/buttons',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Social Buttons',
                    url: '/components/social-buttons',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Cards',
                    url: '/components/cards',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Forms',
                    url: '/components/forms',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Modals',
                    url: '/components/modals',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Switches',
                    url: '/components/switches',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tables',
                    url: '/components/tables',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tabs',
                    url: '/components/tabs',
                    icon: 'icon-puzzle'
                }
            ]
        },
        {
            name: 'Icons',
            url: '/icons',
            icon: 'icon-star',
            children: [
                {
                    name: 'Font Awesome',
                    url: '/icons/font-awesome',
                    icon: 'icon-star',
                    badge: {
                        variant: 'secondary',
                        text: '4.7'
                    }
                },
                {
                    name: 'Simple Line Icons',
                    url: '/icons/simple-line-icons',
                    icon: 'icon-star'
                }
            ]
        },
        {
            name: 'Widgets',
            url: '/widgets',
            icon: 'icon-calculator',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            name: 'Charts',
            url: '/charts',
            icon: 'icon-pie-chart'
        },
        {
            divider: true
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [
                {
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star'
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star'
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star'
                },
                {
                    name: 'Error 500',
                    url: '/500',
                    icon: 'icon-star'
                }
            ]
        }
    ]
};
