from werkzeug.security import check_password_hash, generate_password_hash
from flask import (
    Blueprint,
    render_template,
    redirect,
    url_for,
    request
)

#******************************************************************************#


bp = Blueprint('accounts', __name__, url_prefix='/accounts')

@bp.route('/', methods=("GET", "POST"))
def dashboard():
    if request.method == "POST":
        pass
    return redirect(url_for('accounts.login'))


@bp.route('/register', methods=("GET", "POST"))
def register():
    if request.method == "POST":
        pass
    return render_template("accounts/register.html")


@bp.route('/login', methods=("GET", "POST"))
def login():
    if request.method == "POST":
        return redirect(url_for('dashboard.main'))
    return render_template("accounts/login.html")


@bp.route('/forgotpassword', methods=("GET", "POST"))
def forgotpassword():
    if request.method == "POST":
        pass
    return render_template("accounts/forgot_passwd.html")