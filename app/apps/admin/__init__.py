from flask import (
    Blueprint,
    render_template,
    redirect,
    url_for,
    request,
    jsonify
)

#***********************************************************************#
#               Admin package only for admin user                       #
#***********************************************************************#

bp = Blueprint(
    "admin-369-nkts",
    __name__,
    url_prefix="/admin-369-nkts",
    static_url_path='admin-369-nkts.static',
    static_folder='static-admin/static',
    template_folder='static-admin/templates'
)

@bp.route('/', methods=["GET","POST"])
def admin():
    if request.method == "POST":
        return render_template("admin-dsh/dashboard.html")

    return redirect(url_for("admin-369-nkts.login"))

@bp.route('/login', methods=["GET","POST"])
def login():
    if request.method == "POST":
        return redirect(url_for("admin-369-nkts.admin"))
    return render_template('account/login.html')

@bp.route('/forgotaccount', methods=["GET","POST"])
def forgot_account():
    return render_template('account/forgotaccount.html')


#****************************************************************************#
#                          ASYNCHRONOUS RESPONSE                             #
#****************************************************************************#

@bp.route('/adm-rqst-dta', methods=["POST"])
def admin_request_data():
    if request.method == "POST":
        from .test_data import INITIAL_DATA
        #******************************************#
        error = {"error": "incorrect request"}
        rout = request.get_json()
        if len(rout) > 0 and "get_push" in rout:
            get = rout["get_push"]
            return jsonify(INITIAL_DATA) if get == "initial" else jsonify(error)
    else:
        return {"error":"youn't  authorization"}