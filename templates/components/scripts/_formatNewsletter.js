/*
          ========================
          FORMAT NEWSLETTER
          ========================
          */
          (function() {
            var newsletterWrap = document.querySelector('label[for="subscriptionNewsletter"]').parentElement;
            newsletterWrap.querySelector('.mktoGutter').remove();
            newsletterWrap.style.display = 'flex';
            newsletterWrap.style.flexDirection = 'row-reverse';
            newsletterWrap.querySelector('.mktoCheckboxList').style.flexShrink = '12';
            newsletterWrap.style.paddingTop = '0.5rem';
            newsletterWrap.style.paddingBottom = '0.5rem';
          })();
