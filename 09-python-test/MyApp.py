from flask import Flask, render_template, request
class MyApp:
	app = Flask(__name__, static_folder = "./dist/static", template_folder = "./dist")
	port = 1234
                       
    def __init__(self, port):
        self.port = port
        
        @app.route('/')
        def index():
            return render_template("index.html")
        
    
    def run:
    	print(port)
    	if __name__ == '__main__':
    		app.run(debug=True, port=PORT)

    	