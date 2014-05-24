from downloader import app

class Download(object):
    
    """Constructor"""
    def __init__(self, id, name, progress, status, eta):

    	self.id = id
    	self.name = name
    	self.progress = progress
    	self.status = status
    	self.eta = eta

class PendingDownload(object):
	def __init__(self, name, url):
		self.name = name
		self.url = url