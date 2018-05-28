module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['watch:js','watch:sass']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/js/*.js'],
    },
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      sass: {
        files: ['src/sass/*.scss'],
        tasks: ['sass']
      }
    },
    browserSync: {
      bsFiles: {
          src : ['src/css/main.css', 'src/index.html']
      },
      options: {
        watchTask: true,
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
          'src/css/main.css': 'src/sass/main.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint','sass','browserSync','concurrent']);
};