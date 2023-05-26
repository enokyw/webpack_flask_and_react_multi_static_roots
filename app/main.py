import os
from flask import Flask, send_from_directory


base_dir = os.path.dirname(os.path.realpath(__file__))
def create_app(test_config=None):
    # create and configure the app
    app = Flask(
        __name__,
        instance_relative_config=True,
        static_folder=f"{base_dir}/build/static",
        static_url_path="/static",
        template_folder="build/templates"
    )
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'bkApp.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('settings.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    app.add_url_rule('/assets/<path:filename>','assets', lambda filename: send_from_directory('assets',filename))
    app.add_url_rule('/ws-media/<path:filename>','ws-media', lambda filename: send_from_directory('apps/website/media', filename)) #static files and media for website
    #***************************#
    #   IMPORTS AND REGISTERS   #
    #***************************#

    from .apps import acc_bp, wbs_bp, dsh_bp, adm_bp


    app.register_blueprint(acc_bp)
    app.register_blueprint(wbs_bp)
    app.register_blueprint(dsh_bp)
    app.register_blueprint(adm_bp)

    return app