const elasticsearch = require('elasticsearch');
const config = require('../config/config.json');

let elasticClient;
console.log(123123)
module.exports = {
    setElasticClient: () => {
        const elasticSet = config.ELASTICSEARCH_HOST;
        const elasticUrl = [];
        elasticSet.forEach((item) => {
            elasticUrl.push(`${item.IP}:${item.PORT}`);
        });
        elasticClient = new elasticsearch.Client({
            hosts: elasticUrl,
        });
    },

    ping: (req, res) => {
        elasticClient.ping({
            requestTimeout: 30000,
        }, (error) => {
            if (error) {
                res.status(500);
                return res.json({ status: false, msg: 'Elasticsearch cluster is down!' });
            }
            res.status(200);
            return res.json({ status: true, msg: 'Success! Elasticsearch cluster is up!' });
        });
    },

    /** 1. Create index */
    initIndex: (req, res, indexName) => elasticClient.indices.create({
        index: indexName,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 2. Check if index exists */
    indexExists: (req, res, indexName) => elasticClient.indices.exists({
        index: indexName,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 3.  Preparing index and its mapping */
    initMapping: (req, res, indexName, docType, payload) => elasticClient.indices.putMapping({
        index: indexName,
        type: docType,
        body: payload,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 4. Add/Update a document */
    addDocument: (indexName, _id, docType, payload) => elasticClient.index({
        index: indexName,
        type: docType,
        id: _id,
        body: payload,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 5. Update a document */
    update: async (indexName, _id, docType, payload) => elasticClient.update({
        index: indexName,
        type: docType,
        id: _id,
        body: payload,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 6. Search */
    search: async (indexName, docType, payload) => elasticClient.search({
        index: indexName,
        type: docType,
        body: payload,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 7. Add bulk data */
    addBulk: async payload => elasticClient.bulk({
        refresh: 'wait_for',
        body: payload
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 8. Scroll-Search */
    scrollSearch: async (indexName, docType, payload, scrollTime) => elasticClient.search({
        index: indexName,
        type: docType,
        body: payload,
        scroll: scrollTime,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    /** 9. Scroll */
    scroll: async (scroll, scrollId) => elasticClient.scroll({
        scrollId: scrollId,
        scroll: scroll
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    // Delete a document from an index
    deleteDocument: async (index, _id, docType) => elasticClient.delete({
        index: index,
        type: docType,
        refresh: 'wait_for',
        id: _id,
    }).catch((err) => {
        console.log(err);
        throw err;
    }),
    deletebyquery: async (index, docType, payload) => elasticClient.deleteByQuery({
        index: index,
        type: docType,
        refresh: 'wait_for',
        body: payload
    }).catch((err) => {
        console.log(err);
        throw err;
    }),

    // Delete all
    deleteAll: (req, res) => {
        elasticClient.indices.delete({
            index: '_all'
        }, (err, resp) => {
            if (err) {
                console.error(err.message);
                return res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            console.log('Indexes have been deleted!', resp);
            return res.json(resp);
        });
    }
};
