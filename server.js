app.use(express.static('./dist/ngx-admin'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/ngx-admin/' }
    );
});
app.listen(process.env.PORT || 8080);
