module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/js/*.js'],
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    browserSync: {
      bsFiles: {
          src : ['src/css/*.css', 'src/index.html']
      },
      options: {
        server: {
            baseDir: "src"
        }
      }
    },
  sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'src/css/main.css': 'src/sass/base.scss'
            }
        }
    }
  });

  grunt.registerTask('default', ['jshint','sass:dist','browserSync']);

};