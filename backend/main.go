// main.go (Ginサーバー)
package main

import (
	lorem "github.com/drhodes/golorem"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.Default())

	// /api/posts エンドポイントを定義
	r.GET("/api/posts", getPosts)
	r.GET("/api/posts/:id", getPost)
	r.POST("/api/posts", createPost)

	r.Run(":8080") // Ginサーバーをポート8080で起動
}

func getPosts(c *gin.Context) {
	// 投稿データを取得して返す
	c.JSON(200, gin.H{
		"message": "List of posts",
		"content": lorem.Word(20, 100),
	})
}

func getPost(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{
		"content": lorem.Word(20, 100),
		"message": "Post with ID " + id,
	})
}

func createPost(c *gin.Context) {
	// 新しい投稿を作成する処理
	c.JSON(201, gin.H{
		"message": "Post created",
	})
}
