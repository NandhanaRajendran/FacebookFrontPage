$("document").ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:12
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:12
            },
            mail:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:12
            },
            day:{
                required:true
            },
            year:{
                required:true
            },
            month:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters",
                maxlength:"Don't exceed 12 characters"
            },
            sname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters",
                maxlength:"Don't exceed 12 characters"
            }
        }
    })
})