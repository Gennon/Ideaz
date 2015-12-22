import pytest
from flask import url_for

@pytest.fixture
def selenium(selenium, live_server):
    selenium.implicitly_wait(10)
    selenium.maximize_window()
    url = "{0}{1}".format(live_server.url(), url_for('main.index'))
    selenium.get(url)
    return selenium


@pytest.mark.usefixtures('live_server')
class TestLiveServer:

    def test_server_is_running(self, selenium):
        assert 'Hello World' in selenium.find_element_by_tag_name('h1').text
        
    def test_main_js_is_present(self, selenium, live_server):
        assert 'main.js' in selenium.page_source
        
    def test_bootstrap_is_present(self, selenium, live_server):
        assert 'bootstrap.min.css' in selenium.page_source  