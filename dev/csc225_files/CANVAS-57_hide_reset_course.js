$( function() {
    if(ENV && ENV.current_user_roles
        && !(ENV.current_user_roles.includes("admin") || ENV.current_user_roles.includes("root_admin"))
    ){
        $( ".Button--course-settings.reset_course_content_button" ).hide();
    }
});
