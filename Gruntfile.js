module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // autoprefixer:
    // {
    //   dist:
    //   {
    //     options: {
    //       browsers: ['last 2 version', 'ie 8', 'ie 9']
    //     },
    //     files:[{
    //       expand: true,
    //       src: ['**/*.css'],
    //       dest: '',
    //       ext: '.css'
    //     }]     
    //   }
    // },

    uglify:
    {
      lib:
      {
        mangle:true,
        compress:true,
        files:[{
          expand:true,
          src: ['lib/**.js', '!lib/**.min.js'],
          ext: '.min.js'
        }]
      }
    },

    cssmin:
    {
      dist:{
        files:[{
          expand: true,
          src: ['css/**/*.css'],
          dest: 'css/',
          rename:function(dest, src) {
              // use the source directory to create the file
              // example with your directory structure
              //   dest = 'dev/js/'
              //   src = 'module1/js/main.js'
              var newSrc = src.replace("css/","");
              return dest + newSrc;
            },
          ext: '.min.css',
          quiet: true
        }]         
      }
    },

    sass:
    {
      dist:
      {
        sourcemap:true,
        files:[{
          expand: true,
          src: ['scss/**/*.scss'],
          dest: 'css/',
          rename:function(dest, src) {
            var newSrc = src.replace("scss/","");
            return dest + newSrc;
          },
          ext: '.css',
          quiet: true
        }]        
      }
    },


    watch: {
      sass:
      {
      files: ["**/*.scss"],
      tasks: ['newer:sass']  
      },
      css:
      {
        files: ["**/*.css"],
      tasks: ['newer:cssmin',]
    },
    js:
    {
        files: ["**/*.js", "!**.*.min.js"],
      tasks: ['newer:uglify']
    }
      
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify', 'watch']);
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
  grunt.registerTask('noSass', ['cssmin', 'uglify', 'watch:css', 'watch:js']);

};