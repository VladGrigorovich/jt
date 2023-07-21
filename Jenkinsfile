pipeline {
    agent { docker { 
        image 'node:18.16.1-alpine3.18'
        args '-v /var/run/docker.sock:/var/run/docker.sock -ti'
    } }
    environment { NPM_CONFIG_CACHE = "${WORKSPACE}/.npm" }
    stages {
        stage('build') {
            steps {
                sh 'cat /var/run/docker.sock && npm i && npm test'
            }
        }
    }
}
