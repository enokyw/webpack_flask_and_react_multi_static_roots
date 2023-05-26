from werkzeug.security import check_password_hash, generate_password_hash
from flask import (
    Blueprint,
    render_template,
    request
)


bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

@bp.route('/', methods=["GET","POST"])
def main():
    return render_template('__dashboard/main.html')