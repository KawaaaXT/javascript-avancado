
const path = require('path')

module.exports = {
    mode: 'production', // Modo Produção
    entry: './src/index.js', // Entrada
    output: { // Saida
     path: path.resolve(__dirname, 'public', 'assets', 'js'), // Pasta onde o arquivo sera gerado no caso o (bundle.js)
      filename: 'bundle.js' // Nome do arquivo que sera criado
     },
    module: {
       rules: [{
         exclude: /node_modules/,
         test: /\.js$/,
         type: 'javascript/auto',
         use: {
            loader: 'babel-loader', // Integrando o Babel no Meu WebPack
            options: {
                presets: ['@babel/preset-env']
            } 
         }
       }]

    },
    devtool: 'source-map'
}