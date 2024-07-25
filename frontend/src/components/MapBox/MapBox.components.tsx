export default function MapBoxs() {
  return (
    <section className="section-map">
      <div id="map" className="mapboxgl-map">
        <div className="mapboxgl-canary" style={{ visibility: "hidden" }}></div>
        <div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
          <canvas
            className="mapboxgl-canvas"
            tabIndex={0}
            aria-label="Map"
            role="region"
            width="1326"
            height="650"
            style={{ width: "1326px", height: "650px" }}
          ></canvas>
          <div
            className="marker mapboxgl-marker mapboxgl-marker-anchor-bottom"
            aria-label="Map marker"
            style={{
              transform: `translate(613px, 500px) translate(-50%, -100%) translate(0px, 0px)`,
              opacity: 1,
              pointerEvents: 'auto'
            }}
          ></div>
          <div
            className="marker mapboxgl-marker mapboxgl-marker-anchor-bottom"
            aria-label="Map marker"
            style={{
              transform: `translate(616px, 485px) translate(-50%, -100%) translate(0px, 0px)`,
              opacity: 1,
              pointerEvents: 'auto'
            }}
          ></div>
          <div
            className="marker mapboxgl-marker mapboxgl-marker-anchor-bottom"
            aria-label="Map marker"
            style={{
              transform: `translate(630px, 416px) translate(-50%, -100%) translate(0px, 0px)`,
              opacity: 1,
              pointerEvents: 'auto',
            }}
          ></div>
          <div
            className="marker mapboxgl-marker mapboxgl-marker-anchor-bottom"
            aria-label="Map marker"
            style={{
              transform: `translate(713px, 335px) translate(-50%, -100%) translate(0px, 0px)`, opacity: 1,
              pointerEvents: 'auto'
            }}
          ></div>
          <div
            className="marker mapboxgl-marker mapboxgl-marker-anchor-bottom"
            aria-label="Map marker"
            style={{
              transform: `translate(652px, 200px) translate(-50%, -100%) translate(0px, 0px)`, opacity: 1,
              pointerEvents: 'auto',
            }}
          ></div>
        </div>
        <div className="mapboxgl-control-container">
          <div className="mapboxgl-ctrl-top-left"></div>
          <div className="mapboxgl-ctrl-top-right"></div>
          <div className="mapboxgl-ctrl-bottom-left">
            <div className="mapboxgl-ctrl" style={{ display: 'block' }}>
              <a
                className="mapboxgl-ctrl-logo"
                target="_blank"
                rel="noopener nofollow"
                href="https://www.mapbox.com/"
                aria-label="Mapbox logo"
              ></a>
            </div>
          </div>
          <div className="mapboxgl-ctrl-bottom-right">
            <div className="mapboxgl-ctrl mapboxgl-ctrl-attrib">
              <button
                className="mapboxgl-ctrl-attrib-button"
                type="button"
                aria-label="Toggle attribution"
              >
                <span
                  className="mapboxgl-ctrl-icon"
                  aria-hidden="true"
                  title="Toggle attribution"
                ></span>
              </button>
              <div className="mapboxgl-ctrl-attrib-inner" role="list">
                <a
                  href="https://www.mapbox.com/about/maps/"
                  target="_blank"
                  title="Mapbox"
                  aria-label="Mapbox"
                >
                  © Mapbox
                </a>
                <a
                  href="https://www.openstreetmap.org/about/"
                  target="_blank"
                  title="OpenStreetMap"
                  aria-label="OpenStreetMap"
                >
                  © OpenStreetMap
                </a>
                <a
                  className="mapbox-improve-map"
                  href="https://apps.mapbox.com/feedback/?owner=s-chanda&amp;id=clikoaxwo00fq01pf9h3lgc0g&amp;access_token=pk.eyJ1Ijoicy1jaGFuZGEiLCJhIjoiY2xpa21vdGl6MGpzejNkb2Q2MmtsbnZubCJ9.iikMxT2RPcvdqRUVihTkuw#/77.571/33.373/6.52"
                  target="_blank"
                  aria-label="Map feedback"
                  rel="noopener nofollow"
                >
                  Improve this map
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mapboxgl-popup mapboxgl-popup-anchor-bottom"
          style={{
            maxWidth: "240px",
            transform: `translate(-50%, -100%) translate(613px, 470px)`,
            opacity: 1
          }}
        >
          <div className="mapboxgl-popup-tip"></div>
          <div className="mapboxgl-popup-content" style={{ pointerEvents: 'auto' }}>
            <p>Day 1: Manali Bikerz Point</p>
            <button
              className="mapboxgl-popup-close-button"
              type="button"
              aria-label="Close popup"
            // aria-hidden="true"
            >
              ×
            </button>
          </div>
        </div>
        <div
          className="mapboxgl-popup mapboxgl-popup-anchor-bottom"
          style={{
            maxWidth: "240px",
            transform: `translate(-50%, -100%) translate(616px, 455px)`,
            opacity: 1
          }}
        >
          <div className="mapboxgl-popup-tip"></div>
          <div className="mapboxgl-popup-content" style={{ pointerEvents: 'auto' }}>
            <p>Day 3: Temple of Marhi</p>
            <button
              className="mapboxgl-popup-close-button"
              type="button"
              aria-label="Close popup"
            // aria-hidden="true"
            >
              ×
            </button>
          </div>
        </div>
        <div
          className="mapboxgl-popup mapboxgl-popup-anchor-bottom"
          style={{
            maxWidth: "240px",
            transform: `translate(-50%, -100%) translate(630px, 386px)`,
            opacity: 1
          }}
        >
          <div className="mapboxgl-popup-tip"></div>
          <div className="mapboxgl-popup-content" style={{ pointerEvents: 'auto' }}>
            <p>Day 6: Zing Zing Bar</p>
            <button
              className="mapboxgl-popup-close-button"
              type="button"
              aria-label="Close popup"
            // aria-hidden="true"
            >
              ×
            </button>
          </div>
        </div>
        <div
          className="mapboxgl-popup mapboxgl-popup-anchor-bottom"
          style={{
            maxWidth: "240px",
            transform: `translate(-50%, -100%) translate(713px, 305px)`,
            opacity: 1
          }}
        >
          <div className="mapboxgl-popup-tip"></div>
          <div className="mapboxgl-popup-content" style={{ pointerEvents: 'auto' }}>
            <p>Day 10: Tso Kar</p>
            <button
              className="mapboxgl-popup-close-button"
              type="button"
              aria-label="Close popup"
            // aria-hidden="true"
            >
              ×
            </button>
          </div>
        </div>
        <div
          className="mapboxgl-popup mapboxgl-popup-anchor-bottom"
          style={{
            maxWidth: "240px",
            transform: `translate(-50%, -100%) translate(652px, 170px)`,
            opacity: 1
          }}
        >
          <div className="mapboxgl-popup-tip"></div>
          <div className="mapboxgl-popup-content" style={{ pointerEvents: 'auto' }}>
            <p>Day 13: Leh</p>
            <button
              className="mapboxgl-popup-close-button"
              type="button"
              aria-label="Close popup"
            // aria-hidden="true"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </section >
  );
}
