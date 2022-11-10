var homeSlider = [
    'https://theme.hstatic.net/200000163831/1000713867/14/slider_1.jpg?v=119',
    'https://theme.hstatic.net/200000163831/1000713867/14/slider_2.jpg?v=119',
    'https://theme.hstatic.net/200000163831/1000713867/14/slider_4.jpg?v=119',
    'https://theme.hstatic.net/200000163831/1000713867/14/slider_5.jpg?v=119'
];

var newProductSlider = [
    'https://product.hstatic.net/200000163831/product/adt10_cafe_1_e1e48e0c7909420ab9757b9a36ab0351_large.jpg',
    'https://product.hstatic.net/200000163831/product/kaki_dai_jogger_be_kem_1_908558f2859e495eadef2a1f9eddbb8f_large.jpg',
    'https://product.hstatic.net/200000163831/product/ao_kaki_lot_long_den_2_124e63a4161c4d99ad8bdbe148bedc97_large.jpg',
    'https://product.hstatic.net/200000163831/product/set_bo_1200x1200_0014_layer_7_f9a1ffddf73340cb9f550c6c4f67702c_large.jpg'
];

class SiteController {
    homeShow(req, res, next) {
        res.render('home', {
            homeSlider,
            newProductSlider
        });
    }

    newProductsShow(req, res, next) {
        res.render('new_products');
    }

    productsShow(req, res, next) {
        res.render('products');
    }

    sellingShow(req, res, next) {
        res.render('selling');
    }

    saleShow(req, res, next) {
        res.render('sale');
    }

    blogShow(req, res, next) {
        res.render('blog');
    }

    contactShow(req, res, next) {
        res.render('contact');
    }
}

module.exports = new SiteController();
