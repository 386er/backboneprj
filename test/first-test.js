define(['modules/blogview'], function(BlogView){

	var assert = buster.assert;

    buster.testCase("A test case", {
        "test the module": function(){
            assert.equals( BlogView.className, 'blogpost' );
        }
    });
});
