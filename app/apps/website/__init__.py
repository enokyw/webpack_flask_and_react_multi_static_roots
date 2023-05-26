from werkzeug.security import check_password_hash, generate_password_hash
from flask import (
    Blueprint,
    render_template,
    request
)


bp = Blueprint('', __name__, url_prefix='/')

@bp.route('/')
def home():
    return render_template('website/website.html')