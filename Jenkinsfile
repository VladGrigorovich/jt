pipeline {
    agent { docker { image 'node:18.16.1-alpine3.18' } }
    environment { NPM_CONFIG_CACHE = "${WORKSPACE}/.npm" }
    stages {
        stage('build') {
            steps {
                sh 'npm i && npm test'
            }
        }
    }
}
