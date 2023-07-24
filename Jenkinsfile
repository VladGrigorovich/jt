pipeline {
    agent { docker { 
        image 'node:18.16.1-alpine3.18'
        args '-v \'/var/run/docker.sock:/var/run/docker.sock\' -p 9229:9229'
    } }
    environment { NPM_CONFIG_CACHE = "${WORKSPACE}/.npm" }
    stages {
        stage('build') {
            steps {
                sh 'npm i && node --inspect-brk ./node-modules/jest/bin/jest.js'
            }
        }
    }
}
