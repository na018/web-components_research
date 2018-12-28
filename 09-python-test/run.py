from flask import Flask, render_template, request
def app1():

    app = Flask(__name__,
                static_folder = "./dist/static",
                template_folder = "./dist")
    
    @app.route('/')
    def index():
        return render_template("index.html")
    
#    if __name__ == '__main__':
#        app.run(debug=True, port=8089)

    return app
        
def app2():
    app = Flask(__name__,
                static_folder = "./dist/static",
                template_folder = "./dist")
    
    @app.route('/')
    def index():
        return render_template("index.html")
    
    return app
    
def get_apps():
	return [app1(),app2()]
    
        
