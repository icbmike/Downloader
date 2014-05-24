from flask import Flask, render_template, abort, Response, g, url_for, request, jsonify

from downloader.models.user import User
from downloader.models.download import Download, PendingDownload
from downloader import app, auth, db
import jsonpickle

download_queue = [
	Download(5, "DS9 Season 1", 54, 'Paused', '5 Hours'),
	Download(2, "DS9 Season 2", 26.4, 'Downloading', '8 Hours')
];

new_downloads_queue = [];


@app.route('/api/downloads', methods=['GET'])
@auth.login_required
def get_downloads():
	return Response(jsonpickle.encode(download_queue, unpicklable=False),  mimetype='application/json')

@app.route('/api/pendingDownloads', methods=['GET'])
@auth.login_required
def get_pending_downloads():
	return Response(jsonpickle.encode(new_downloads_queue, unpicklable=False),  mimetype='application/json')

@app.route('/api/pendingDownloads/<name>')
@auth.login_required
def get_pending_dnowload(name):

	pendingDownload = next((download for download in new_downloads_queue if download.name == name), None)
	if pendingDownload is None:
		return abort(404)

	return jsonify(pendingDownload)



@app.route('/api/pendingDownloads', methods=['POST'])
@auth.login_required
def create_download():
	
	if request.json is None:
		abort(400)

	url = request.json.get('url')
	name = request.json.get('name')
	
	if url is None or name is None:
		abort(400)    # missing arguments

	if any(download.url == url or download.name == name for download in new_downloads_queue):
		abort(409)

	new_downloads_queue.append(PendingDownload(name, url))

	return (jsonify({'name': name}), 201,
            {'Location': url_for('get_pending_dnowload', name=name, _external=True)})



	
