pipeline {
    agent {
        docker { image 'node:22.13.1-alpine3.21' }
    }

    stages {
        stage('pulling') {
            steps {
                checkout scmGit(branches: [[name: '**']], extensions: [], userRemoteConfigs: [[credentialsId: 'a1cdc756-5418-437e-bbbf-ebe8d695f6a8', url: 'https://github.com/Mohamed-JJ/red-tetris-front']])
            }
        }
    }
}


