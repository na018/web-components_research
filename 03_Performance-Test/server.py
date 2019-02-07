from flask import Flask, render_template, request
app = Flask(__name__, static_folder = "./chapter2_performance_ProgressBar_files_edited/static", template_folder = "./")

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True, port=8004)