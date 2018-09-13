function init() {
    var $win = $(window),
        // native DOM-specific lookups are faster than jQuery selector lookups
        $nav = $(document.getElementsByTagName("nav")[0]),
        // some pages have it named cover, others overlay
        $cov = $(document.querySelector(".cover, .overlay")),
        $jump = $(document.getElementById("jump")),
        $jumpicon = $(document.getElementById("jumpicon")),
        $down = $(document.getElementById("down")),
        $banner = $(document.getElementById("banner")),
        // some pages have it named .align-box, others h1
        $heading = $(document.querySelector(".align-box, h1")),
        coverPageHeight = $cov.height(),
        headingTopPosition = $heading.offset().top,
        // make navbar opaque just before user scrolls past heading
        navBarTransparentPixelLimit =
            headingTopPosition - $nav.height() - ($banner.height() || 0),
        darkNavbarClasses = "grey darken-4",
        transparentNavbarClass = "transparent",
        bannerTransparentClass = "std-transparent",
        hiddenJumpIconClass = "hiddenJumpIcon";

    function throttle(func, time) {
        var timeout, hadCalledInBetween;

        return function() {
            if (!timeout) {
                func.apply(this, arguments);

                timeout = setTimeout(function() {
                    if (hadCalledInBetween) {
                        func.apply(this, arguments);
                        hadCalledInBetween = false;
                    }
                    timeout = null;
                }, time);
            } else {
                hadCalledInBetween = true;
            }
        };
    }

    function checkScroll() {
        var scrollTop = $win.scrollTop();

        if (scrollTop > navBarTransparentPixelLimit) {
            $nav.removeClass(transparentNavbarClass);
            $nav.addClass(darkNavbarClasses);
            $banner.removeClass(bannerTransparentClass);
        } else {
            $nav.addClass(transparentNavbarClass);
            $nav.removeClass(darkNavbarClasses);
            $banner.addClass(bannerTransparentClass);
        }

        if (scrollTop > coverPageHeight / 2) {
            $jump.removeClass(hiddenJumpIconClass);
            $jumpicon.removeClass(hiddenJumpIconClass);
        } else {
            $jump.addClass(hiddenJumpIconClass);
            $jumpicon.addClass(hiddenJumpIconClass);
        }
    }

    // demo for throttle https://jsbin.com/sagiwizuvu/1/edit?output
    if ($cov.length > 0) {
        checkScroll();
        $win.on("scroll load resize", throttle(checkScroll, 100));
    } else {
        // make navbar permanently opaque on non-Home pages
        $nav.removeClass(transparentNavbarClass);
    }

    $jump.click(function() {
        $("body, html").animate(
            {
                scrollTop: 0
            },
            500
        );
    });

    $down.click(function() {
        // On clicking the down arrow
        $("body,html").animate(
            {
                scrollTop: $cov.height() - $nav.height()
            },
            600
        );
    });
}

window.addEventListener("load", init);
